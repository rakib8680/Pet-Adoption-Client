import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const FilterUser = ({ setSearchTerm, setStatus, setRole, setGender }: any) => {
  return (
    <>
      {/* for large screens */}
      <div className="hidden lg:flex flex-nowrap gap-5 mb-2  bg-[#F5F5F6] p-2 rounded-lg  ">
        {/* filter by Role */}
        <FormControl
          color="secondary"
          size="small"
          sx={{ width: "100%", bgcolor: "white" }}
        >
          <InputLabel>Role</InputLabel>
          <Select defaultValue="" onChange={(e) => setRole(e.target.value)}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="ADMIN">Admin</MenuItem>
            <MenuItem value="USER">User</MenuItem>
          </Select>
        </FormControl>

        {/* filter by Status */}
        <FormControl
          color="secondary"
          size="small"
          sx={{ width: "100%", bgcolor: "white" }}
        >
          <InputLabel>Status</InputLabel>
          <Select defaultValue="" onChange={(e) => setStatus(e.target.value)}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="ACTIVE">Active</MenuItem>
            <MenuItem value="BLOCKED">Blocked</MenuItem>
          </Select>
        </FormControl>

        {/* filter by Gender */}
        <FormControl
          color="secondary"
          size="small"
          sx={{ width: "100%", bgcolor: "white" }}
        >
          <InputLabel>Gender</InputLabel>
          <Select defaultValue="" onChange={(e) => setGender(e.target.value)}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="MALE">Male</MenuItem>
            <MenuItem value="FEMALE">Female</MenuItem>
          </Select>
        </FormControl>

        {/* searching */}
        <div className="flex gap-2 w-full">
          <TextField
            label="Search"
            color="secondary"
            size="small"
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ width: "300px", bgcolor: "white" }}
          />
          <Button
            disableElevation
            color="secondary"
            sx={{ color: "white" }}
            onClick={() => {
              setGender("");
              setSearchTerm("");
              setRole("");
              setStatus("");
            }}
          >
            RESET
          </Button>
        </div>
      </div>


      {/* for small screens */}
      <div className="flex flex-wrap  gap-1  my-2 lg:hidden">
        <div className="flex w-full gap-2 bg-[#F5F5F6] rounded-lg  p-2">
          {/* filter by Role */}
          <FormControl
            color="secondary"
            size="small"
            sx={{ width: "100%", bgcolor: "white" }}
          >
            <InputLabel>Role</InputLabel>
            <Select defaultValue="" onChange={(e) => setRole(e.target.value)}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="ADMIN">Admin</MenuItem>
              <MenuItem value="USER">User</MenuItem>
            </Select>
          </FormControl>

          {/* filter by Status */}
          <FormControl
            color="secondary"
            size="small"
            sx={{ width: "100%", bgcolor: "white" }}
          >
            <InputLabel>Status</InputLabel>
            <Select defaultValue="" onChange={(e) => setStatus(e.target.value)}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="ACTIVE">Active</MenuItem>
              <MenuItem value="BLOCKED">Blocked</MenuItem>
            </Select>
          </FormControl>

          {/* filter by Gender */}
          <FormControl
            color="secondary"
            size="small"
            sx={{ width: "100%", bgcolor: "white" }}
          >
            <InputLabel>Gender</InputLabel>
            <Select defaultValue="" onChange={(e) => setGender(e.target.value)}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="MALE">Male</MenuItem>
              <MenuItem value="FEMALE">Female</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* searching */}
        <div className="flex gap-2 bg-[#F5F5F6] rounded-lg  p-2 w-full">
          <TextField
            label="Search"
            color="secondary"
            size="small"
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ width: "100%", bgcolor: "white" }}
          />
          <Button
            disableElevation
            color="secondary"
            sx={{ color: "white" }}
            onClick={() => {
              setGender("");
              setSearchTerm("");
              setRole("");
              setStatus("");
            }}
          >
            RESET
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterUser;
