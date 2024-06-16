"use client";
import { useGetAllUsersQuery } from "@/redux/api/userApi";
import {
  Box,
  CircularProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import EditOffIcon from "@mui/icons-material/EditOff";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import RemoveModeratorIcon from "@mui/icons-material/RemoveModerator";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useState } from "react";
import ChangeRoleModal from "./components/ChangeRoleModal";
import ChangeStatusModal from "./components/ChangeStatusModal";




const ManageUser = () => {

  
  const [isRoleModalOpen, setIsRoleModalOpen] = useState<boolean>(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const { data, isLoading } = useGetAllUsersQuery({});

  const allUsers = data?.data;
  const meta = data?.meta;



  //columns
  const columns: GridColDef[] = [
    {
      field: "profilePicture",
      headerName: "Image",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <div className="flex items-center h-full ">
            <Image
              src={row.profilePicture}
              alt="profile"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </div>
        );
      },
    },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "location", headerName: "Location", flex: 1 },
    { field: "contactNumber", headerName: "Contact", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* role  */}
            <Tooltip
              className={`rounded-lg !h-[30px] !w-[30px] p-1 cursor-pointer ${
                row?.role === "ADMIN"
                  ? "bg-[#F2994A] text-white"
                  : "bg-gray-300"
              }`}
              title="Change Role"
              onClick={() => {
                setUserId(row.id);
                setIsRoleModalOpen(true);
              }}
            >
              {row.role === "ADMIN" ? (
                <LocalPoliceIcon fontSize="medium" />
              ) : (
                <RemoveModeratorIcon fontSize="medium" />
              )}
            </Tooltip>


            {/* status  */}
            <Tooltip
              className={`rounded-lg !h-[30px] !w-[30px] p-1 cursor-pointer ${
                row?.status === "ACTIVE" ? "bg-sky-200" : "bg-gray-300"
              }`}
              title="Change Status"
              onClick={() => {
                setUserId(row.id);
                setIsStatusModalOpen(true);
              }}
            >
              <ManageAccountsIcon fontSize="medium" />
            </Tooltip>


            {/*Info*/}
            <Tooltip
              className="rounded-lg !h-[30px] !w-[30px] p-1 cursor-pointer"
              sx={{ backgroundColor: "secondary.main", color: "white" }}
              title="Edit User"
              // onClick={() => setIsModalOpen(true)}
            >
              <EditOffIcon fontSize="medium" />
            </Tooltip>
          </Box>
        );
      },
    },
  ];



  return (
    <div className="container  mx-auto mt-20">
      <div className="  bg-gradient-to-b from-[#F5F5F5] to-gray-50 p-5 rounded-lg px-10">
        <ChangeRoleModal
          id={userId}
          open={isRoleModalOpen}
          setOpen={setIsRoleModalOpen}
        />
        <ChangeStatusModal
          id={userId}
          open={isStatusModalOpen}
          setOpen={setIsStatusModalOpen}
        />
        <Typography variant="h4" className="pt-5">
          Manage Users
        </Typography>

        <Box my={3}>
          <DataGrid
            rows={allUsers ?? []}
            columns={columns}
            hideFooter
            loading={isLoading}
            rowHeight={70}
            getRowClassName={(params) =>
              params.row.status === "BLOCKED" ? "bg-gray-200" : ""
            }
          />
        </Box>
      </div>
    </div>
  );
};

export default ManageUser;
