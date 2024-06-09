import Footer from "@/components/Shared/Footer/Footer";
import { ReactNode } from "react";




const ProfileLayout = ({children}:{children:ReactNode}) => {
  return (
     <>
         <div className="min-h-screen container mx-auto">
         {children}
         </div>
         <Footer/>
     </>
  )
};

export default ProfileLayout;