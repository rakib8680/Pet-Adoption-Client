"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useGetMyAdoptionRequestsQuery } from "@/redux/api/adopionApi";
import MyAdoptionCard from "./MyAdoptionCard";
import CardSkeleton from "../../HomePage/AllPets/CardSkeleton";



const MyAdoptions = () => {

  const [status, setStatus] = useState("APPROVED");
  const [value, setValue] = useState(1);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { data, isFetching } = useGetMyAdoptionRequestsQuery({ status });
  const myAdoptions = data?.data;
  // console.log(isFetching, isLoading);


  return (
    <div>

      {/* tabs  */}
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Pending" onClick={() => setStatus("PENDING")} />
          <Tab
            label="Approved"
            sx={{ mx: { xs: 4, lg: 7 } }}
            onClick={() => setStatus("APPROVED")}
          />
          <Tab label="Rejected" onClick={() => setStatus("REJECTED")} />
        </Tabs>
      </Box>


      {isFetching ? (
        <div className="mt-10 lg:flex flex-wrap justify-center gap-10">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <div className=" mt-10  flex flex-wrap justify-center gap-10 ">
          {myAdoptions?.map((adoption: any) => (
            <MyAdoptionCard key={adoption.id} adoption={adoption} />
          ))}
        </div>
      )}

      {myAdoptions?.length === 0 && (
        <div className="text-center mt-20">No Data found</div>
      )}
    </div>
  );
};

export default MyAdoptions;
