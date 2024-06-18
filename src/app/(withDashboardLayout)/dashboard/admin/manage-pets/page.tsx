"use client";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import EditOffIcon from "@mui/icons-material/EditOff";
import Link from "next/link";
import { useDeletePetMutation, useGetAllPetsQuery } from "@/redux/api/petApi";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import AddPetModal from "./components/AddPetModal";
import PetsIcon from '@mui/icons-material/Pets';





const ManagePets = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletePet] = useDeletePetMutation();
  const { data, isLoading } = useGetAllPetsQuery({});
  const allPets = data?.data;
  const meta = data?.meta;










  //columns
  const columns: GridColDef[] = [
    {
      field: "photos",
      headerName: "Image",
      flex: 1,
      cellClassName: "!ps-7",
      headerClassName: "!ps-7",
      renderCell: ({ row }) => {
        return (
          <div className="flex items-center h-full ">
            <Image
              src={row.photos[0]}
              alt="profile"
              width={80}
              height={100}
              className="rounded-lg"
            />
          </div>
        );
      },
    },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "species", headerName: "Species", flex: 1 },
    { field: "age", headerName: "Age", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "size", headerName: "Size", flex: 1 },
    { field: "breed", headerName: "Breed", flex: 1 },
    { field: "healthStatus", headerName: "Health Status", flex: 1 },
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
            {/*Edit Info*/}
            <Link href={`/dashboard/admin/manage-pets/edit/${row?.id}`}>
              <Tooltip
                className="rounded-lg !h-[35px] !w-[35px] p-1 cursor-pointer"
                sx={{ backgroundColor: "secondary.main", color: "white" }}
                title="Edit Pet"
              >
                <EditOffIcon fontSize="medium" />
              </Tooltip>
            </Link>
            {/*Delete Pet*/}
              <Tooltip
                className="rounded-lg !h-[35px] !w-[35px] p-1 cursor-pointer"
                sx={{ backgroundColor: "#e5677a", color: "white" }}
                title="Delete Pet"
                onClick={()=>handleDeletePet(row.id)}
              >
                <DeleteIcon fontSize="medium" />
              </Tooltip>
          </Box>
        );
      },
    },
  ];

  return (
    <div className="container  mx-auto my-10">
      <AddPetModal open={isModalOpen} setOpen={setIsModalOpen} />
      <div className="bg-gradient-to-b from-[#F5F5F5] to-gray-50 p-5 rounded-lg px-10">
        <div className="flex justify-between items-center">
          <div>
            <Typography variant="h4" className="pt-5">
              Manage All Pets
            </Typography>
            <Typography variant="body1" className="text-gray-500">
              You can manage all pets here
            </Typography>
          </div>
          <Button disableElevation onClick={()=>setIsModalOpen(true)} endIcon={<PetsIcon/>}>Add Pet</Button>
        </div>
        <hr className="my-5" />

        <Box my={3}>
          <DataGrid
            rows={allPets ?? []}
            columns={columns}
            hideFooter
            loading={isLoading}
            rowHeight={70}
            className="pb-3"
          />
        </Box>
      </div>
    </div>
  );
};

export default ManagePets;
