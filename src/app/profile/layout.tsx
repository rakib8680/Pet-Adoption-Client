import Footer from "@/components/Shared/Footer/Footer";
import { ReactNode } from "react";




const ProfileLayout = ({children}:{children:ReactNode}) => {
  return (
     <>
         <div className="container mx-auto">
         {children}
         </div>
         <Footer/>
     </>
  )
};

export default ProfileLayout;