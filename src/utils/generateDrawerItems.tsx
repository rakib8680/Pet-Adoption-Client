import PetsIcon from "@mui/icons-material/Pets";
import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyIcon from '@mui/icons-material/Key';

export const drawerItems = () => {
  const items = [
    {
      title: "Dashboard",
      path: `admin`,
      icon: DashboardIcon,
    },
    {
      title: "Manage Users",
      path: `admin/manage-users`,
      icon: PeopleIcon,
    },
    {
      title: "Manage Pets",
      path: `admin/manage-pets`,
      icon: PetsIcon,
    },
    {
      title: "Change Password",
      path: `profile/change-password`,
      icon: KeyIcon,
    },
  ];

  return items;
};
