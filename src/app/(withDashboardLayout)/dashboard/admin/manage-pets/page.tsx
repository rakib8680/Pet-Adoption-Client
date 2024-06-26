"use client";
import {
  Box,
  Button,
  CircularProgress,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import EditOffIcon from "@mui/icons-material/EditOff";
import Link from "next/link";
import { useDeletePetMutation, useGetAllPetsQuery } from "@/redux/api/petApi";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import AddPetModal from "./components/AddPetModal";
import PetsIcon from "@mui/icons-material/Pets";
import Swal from "sweetalert2";
import FilterPet from "@/components/Shared/Filtering/FilterPet";
import { useDebounced } from "@/redux/hooks";




const ManagePets = () => {


  // states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [gender, setGender] = useState<string>("");


  // queries
  const query: Record<string, any> = {};
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });
  if (!!debouncedTerm) {
    query["searchTerm"] = searchTerm;
  }
  if (!!species) {
    query["species"] = species;
  }
  if (!!age) {
    query["age"] = age;
  }
  if (!!size) {
    query["size"] = size;
  }
  if (!!gender) {
    query["gender"] = gender;
  }


  // call api 
  const [deletePet] = useDeletePetMutation();
  const { data, isLoading } = useGetAllPetsQuery({ ...query });
  const allPets = data?.data;
  const meta = data?.meta;


  // delete pet function
  const handleDeletePet = async (id: string) => {
    try {
      Swal.fire({
        title: "Remove This Pet ?",
        icon: "warning",
        showCancelButton: true,
        allowOutsideClick: false,
        showCloseButton: true,
        background: "#1F2937",
        iconColor: "#E5D7B6",
        color: "#E5D7B6",
        backdrop: false,
        padding: "0 0 4rem 0",
        confirmButtonColor: "#d35b00",
        cancelButtonColor: "#48565E",
        confirmButtonText: "Remove",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deletePet(id).unwrap();
          if (res.success) {
            Swal.fire({
              title: "Pet Removed Successfully !",
              icon: "success",
              background: "#1F2937",
              backdrop: false,
              iconColor: "#E5D7B6",
              color: "#E5D7B6",
              padding: "0 0 4rem 0",
              confirmButtonColor: "#d35b00",
            });
          }
        }
      });
    } catch (error: any) {
      console.log(error?.message);
    }
  };




  //this is used to check the screen size using material ui useMediaQuery hook, then we set the columns accordingly
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  //columns for large screen
  const largeScreenColumns: GridColDef[] = [
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
              onClick={() => handleDeletePet(row.id)}
            >
              <DeleteIcon fontSize="medium" />
            </Tooltip>
          </Box>
        );
      },
    },
  ];

  // columns for small screen
  const smallScreenColumns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      disableColumnMenu: true,
      cellClassName: "!text-xs flex  items-center",
      headerClassName: "!text-xs",
    },
    {
      field: "species",
      headerName: "Species",
      flex: 1,
      disableColumnMenu: true,
      cellClassName: "!text-xs flex  items-center",
      headerClassName: "!text-xs",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      disableColumnMenu: true,
      cellClassName: "!text-xs flex  items-center",
      headerClassName: "!text-xs",
    },
    {
      field: "action",
      headerName: "Action",
      disableColumnMenu: true,
      cellClassName: "!text-xs flex  items-center",
      headerClassName: "!text-xs",
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
              gap: { xs: "5px", lg: "10px" },
            }}
          >
            {/*Edit Info*/}
            <Link href={`/dashboard/admin/manage-pets/edit/${row?.id}`}>
              <Tooltip
                className="rounded-lg lg:!h-[35px] lg:!w-[35px] p-1 cursor-pointer"
                sx={{ backgroundColor: "secondary.main", color: "white" }}
                title="Edit Pet"
              >
                <EditOffIcon fontSize="medium" />
              </Tooltip>
            </Link>
            {/*Delete Pet*/}
            <Tooltip
              className="rounded-lg lg:!h-[35px] lg:!w-[35px] p-1 cursor-pointer"
              sx={{ backgroundColor: "#e5677a", color: "white" }}
              title="Delete Pet"
              onClick={() => handleDeletePet(row.id)}
            >
              <DeleteIcon fontSize="medium" />
            </Tooltip>
          </Box>
        );
      },
    },
  ];

  const columns = isSmallScreen ? smallScreenColumns : largeScreenColumns;




  return (
    <div className="container  mx-auto mb-10">
      
      <AddPetModal open={isModalOpen} setOpen={setIsModalOpen} />
      <FilterPet
        setSpecies={setSpecies}
        setSearchTerm={setSearchTerm}
        setAge={setAge}
        setSize={setSize}
        setGender={setGender}
      />
      <div className="bg-gradient-to-b from-[#F5F5F5] to-gray-50 rounded-lg p-5 px-3  lg:px-10">
        <div className="flex justify-between items-center">
          <div>
            <Typography className="pt-2 lg:pt-5 lg:!text-3xl !font-semibold">
              Manage All Pets
            </Typography>
            <Typography className="text-gray-500 !text-xs  !font-mono lg:!text-sm">
              You can manage all pets here
            </Typography>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            endIcon={<PetsIcon className="!size-4 lg:!size-5" />}
            className="!text-xs !px-2  lg:!text-sm lg:!px-5"
          >
            Add Pet
          </Button>
        </div>
        <hr className="my-5" />

        {isLoading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <Box my={3}>
            <DataGrid
              rows={allPets ?? []}
              columns={columns}
              hideFooter
              rowHeight={70}
              className="pb-3"
            />
          </Box>
        )}
      </div>
    </div>
  );
};

export default ManagePets;
