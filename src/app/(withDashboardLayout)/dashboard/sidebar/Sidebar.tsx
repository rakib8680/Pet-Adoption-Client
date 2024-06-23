import { Divider, List } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { drawerItems } from "@/utils/generateDrawerItems";
import Image from "next/image";
import logo2 from "@/assets/logo2.png";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <Link
        href="/"
        className="flex items-center justify-center h-24 bg-[#F5F5F5] w-full"
      >
        <Image
          src={logo2}
          alt="logo"
          quality={100}
          width={60}
          className="rounded-full"
        />
      </Link>
      <Divider />
      <List className="h-screen bg-[#F5F5F5]">
        {drawerItems().map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </>
  );
};

export default Sidebar;
