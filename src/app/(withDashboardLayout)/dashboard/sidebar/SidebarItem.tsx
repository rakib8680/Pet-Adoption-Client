import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import { DrawerItem } from "@/types";
import { usePathname } from "next/navigation";

type TSidebarPros = {
  item: DrawerItem;
};

const SidebarItem = ({ item }: TSidebarPros) => {
  let linkPath = `/${item.path}`;

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
