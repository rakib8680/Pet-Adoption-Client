import Navbar from "@/components/Shared/Navbar/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="bg-[#10101017]">
        <Navbar />
      </div>
      {children}
    </div>
  );
};

export default CommonLayout;
