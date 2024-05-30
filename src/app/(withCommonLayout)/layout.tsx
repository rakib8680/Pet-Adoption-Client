import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="bg-[#efefef]">
        <Navbar />
      </div>
      <Box sx={{
        minHeight: "calc(100vh - 100px)",
      }}>
      {children}
      </Box>
      <Footer/>
    </div>
  );
};

export default CommonLayout;
