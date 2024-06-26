import PetsIcon from "@mui/icons-material/Pets";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyIcon from "@mui/icons-material/Key";
import HomeIcon from "@mui/icons-material/Home";

export const drawerItems = () => {
  const items = [
    {
      title: "Dashboard",
      path: `dashboard/admin`,
      icon: DashboardIcon,
    },
    {
      title: "Manage Users",
      path: `dashboard/admin/manage-users`,
      icon: PeopleIcon,
    },
    {
      title: "Manage Pets",
      path: `dashboard/admin/manage-pets`,
      icon: PetsIcon,
    },
    {
      title: "Change Password",
      path: `profile/change-password`,
      icon: KeyIcon,
    },
    {
      title: "Home",
      path: `/`,
      icon: HomeIcon,
    },
  ];

  return items;
};
