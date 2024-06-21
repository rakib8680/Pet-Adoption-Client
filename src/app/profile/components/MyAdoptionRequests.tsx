import MyAdoptions from "@/components/Ui/ProfilePage/MyAdoptions/MyAdoptions";
import { Typography } from "@mui/material";

const MyAdoptionRequests = ({ userInfo }: any) => {
  return (
    <div>
      {userInfo?.role === "USER" && (
        <div className="my-36 bg-gradient-to-t from-[#fffefc] to-[#f4f4f4] rounded-2xl px-10 py-20">
          <div className="space-y-2 pb-10">
            <Typography variant="h4" component="h2" textAlign="center">
              My Adoption Requests
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              textAlign="center"
              color="gray"
            >
              All your adoption requests are listed here. You can view the
              status of your requests here.
            </Typography>
          </div>
          <MyAdoptions />
        </div>
      )}
    </div>
  );
};

export default MyAdoptionRequests;
