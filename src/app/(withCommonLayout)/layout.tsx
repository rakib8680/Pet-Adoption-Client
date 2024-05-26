import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { Box } from "@mui/material";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="bg-[#10101017]">
        <Navbar />
      </div>
      <Box sx={{
        minHeight: "calc(100vh - 100px)",
        position: "relative",
        zIndex: 1
      }}>
      {children}
      </Box>
      <Footer/>
    </div>
  );
};

export default CommonLayout;
