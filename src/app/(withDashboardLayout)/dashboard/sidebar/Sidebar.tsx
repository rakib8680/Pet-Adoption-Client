import { Divider, List } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { drawerItems } from "@/utils/generateDrawerItems";
import Image from "next/image";
import logo2 from "@/assets/logo2.png";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <Link href="/" className="flex items-center mx-auto  h-24">
        <Image
          src={logo2}
          alt="logo"
          quality={100}
          width={60}
          className="rounded-full"
        />
      </Link>
      <Divider />
      <List>
        {drawerItems().map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </>
  );
};

export default Sidebar;
