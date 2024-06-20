"use client";
import { Box, CircularProgress, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import EditOffIcon from "@mui/icons-material/EditOff";
import { useState } from "react";
import { useGetAllAdoptionRequestsQuery } from "@/redux/api/adopionApi";
import ChangeAdoptionStatusModal from "./components/ChangeAdoptionStatusModal";


const AdminPage = () => {
  const [adoptionId, setAdoptionId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetAllAdoptionRequestsQuery({});
  const meta = data?.meta;
  const adoptionRequests = data?.data;

  // console.log(adoptionRequests);



  //columns
  const columns: GridColDef[] = [
    {
      field: "profilePicture",
      headerName: "Adopter Image",
      flex: 1,
      cellClassName: "!ps-7",
      headerClassName: "!ps-7",
      renderCell: ({ row }) => {
        return (
          <div className="flex items-center h-full ">
            <Image
              src={row.user?.profilePicture}
              alt="profile"
              width={50}
              height={50}
              className="rounded-lg"
            />
          </div>
        );
      },
    },
    { field: "userName", headerName: "Adopter Name", flex: 1 },
    { field: "userEmail", headerName: "Email", flex: 1 },
    { field: "userContactNumber", headerName: "Contact", flex: 1 },
    { field: "petOwnershipExperience", headerName: "Experience", flex: 1 },
    {
      field: "photos",
      headerName: "Pet Image",
      flex: 1,
      cellClassName: "!ps-7",
      headerClassName: "!ps-7",
      renderCell: ({ row }) => {
        return (
          <div className="flex items-center h-full ">
            <Image
              src={row?.pet?.photos[0]}
              alt="profile"
              width={80}
              height={100}
              className="rounded-lg"
            />
          </div>
        );
      },
    },
    {
      field: "pet",
      headerName: "Pet Name",
      flex: 1,
      renderCell: ({ row }) => {
        return row?.pet.name;
      },
    },
    { field: "status", headerName: "Adoption Status", flex: 1 },
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
              height: "100%",
              width: "100%",
            }}
          >
            {/*Change Status*/}
            <Tooltip
              onClick={() => {
                setAdoptionId(row.id);
                setIsModalOpen(true);
              }}
              className="rounded-lg !h-[35px] !w-[35px] p-1 cursor-pointer"
              sx={{ backgroundColor: "secondary.main", color: "white" }}
              title="Update Status"
            >
              <EditOffIcon fontSize="medium" />
            </Tooltip>
          </Box>
        );
      },
    },
  ];



  return (
    <div className="container  mx-auto my-10">
      <ChangeAdoptionStatusModal
        id={adoptionId}
        open={isModalOpen}
        setOpen={setIsModalOpen}
      />
      <div className="bg-gradient-to-b from-[#F5F5F5] to-gray-50 p-5 rounded-lg px-10">
        <div className="flex justify-between items-center">
          <Typography variant="h5" className="pt-5">
            All Pet Adoption Requests
          </Typography>
          <Typography variant="body1" className="text-gray-500">
            Total Requests : {adoptionRequests?.length}
          </Typography>
        </div>
        <hr className="my-5" />

        {isLoading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <Box my={3}>
            <DataGrid
              rows={adoptionRequests ?? []}
              columns={columns}
              hideFooter
              rowHeight={70}
              className="pb-3"
              getRowClassName={(params) =>
                (params.row.status === "APPROVED" && "bg-green-50") ||
                (params.row.status === "REJECTED" && "bg-red-50") ||
                ""
              }
            />
          </Box>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
