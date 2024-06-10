"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const MyAdoptions = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Pending" sx={{mr:7}} />
          <Tab label="Approved" sx={{mr:7}}/>
          <Tab label="Rejected" />
        </Tabs>
      </Box>
    </div>
  );
};

export default MyAdoptions;
