import { List } from "@mui/material";

import SidebarItem from "./SidebarItem";
import { drawerItems } from "@/utils/generateDrawerItems";

const Sidebar = () => {
  return (
    <List className="!pt-20">
      {drawerItems().map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </List>
  );
};

export default Sidebar;
