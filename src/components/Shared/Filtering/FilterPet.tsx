import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";





const FilterPet = ({setSpecies, setSearchTerm}:any) => {
  return (
     <div className="flex gap-5 m-6 bg-[#EFEFEF] p-5 rounded-lg">




          {/* searching */}
          <div className="flex gap-2 w-full">
            <TextField
              label="Search"
              color="secondary"
              size="small"
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: "100%", bgcolor: "white" }}
            />
            <Button disableElevation color="secondary"  sx={{color:"white", width:150}} >
              Filter Pets
            </Button>
          </div>


     </div>
  )
};

export default FilterPet;