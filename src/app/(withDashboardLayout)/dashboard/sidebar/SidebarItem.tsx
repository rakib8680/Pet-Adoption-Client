import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import { usePathname } from "next/navigation";
import { DrawerItem } from "@/types";

type TSidebarPros = {
  item: DrawerItem;
};

const SidebarItem = ({ item }: TSidebarPros) => {
  let linkPath = `/dashboard/${item.path}`;
  

  // If the path is '/dashboard/profile/change-password', change it to '/profile/change-password'
  if (linkPath === '/dashboard/profile/change-password') {
    linkPath = '/profile/change-password';
  }

  const pathName = usePathname();

  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathName === linkPath
            ? {
                borderLeft: "4px solid #F2994A",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                "& svg": {
                  color: "#F2994A",
                },
              }
            : {}),

          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            {item.icon ? <item.icon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
