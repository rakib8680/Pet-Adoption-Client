"use client";
import { useGetAllUsersQuery } from "@/redux/api/userApi";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';



const ManageUser = () => {
  const { data, isLoading } = useGetAllUsersQuery({});

  const allUsers = data?.data;
  // console.log(allUsers);
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
          <Box sx={{display:'flex',height:"100%",width:'100%', justifyContent:"center", alignItems:'center', gap:'10px'}}>
            <Tooltip
              className={`rounded-lg !h-[30px] !w-[30px] p-1 cursor-pointer ${row?.role === "ADMIN" ? 'bg-[#F2994A] text-white' : 'bg-gray-300'}`}
              title="Change Role"
              // onClick={}
            >
              {row.role === "ADMIN"? <LocalPoliceIcon fontSize="medium" /> : <RemoveModeratorIcon fontSize="medium" />}
            </Tooltip>
            <Tooltip
              className="rounded-lg !h-[30px] !w-[30px] p-1 cursor-pointer"
              sx={{ backgroundColor: "secondary.main", color: "white" }}
              title="Edit User"
              // onClick={}
            >
              <EditIcon fontSize="medium" />
            </Tooltip>
          </Box>
        );
      },
    },
  ];

  return (
    <div>
      <Typography variant="h4" className="">
        Manage Users
      </Typography>

      <Box my={3}>
        <DataGrid
          rows={allUsers ?? []}
          columns={columns}
          hideFooter
          rowHeight={70}
          getRowClassName={(params) =>
            params.row.status === "BLOCKED" ? "bg-gray-100" : ""
          }
        />
      </Box>
    </div>
  );
};

export default ManageUser;
