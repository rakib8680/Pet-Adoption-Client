import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const FilterPet = ({ setSpecies, setSearchTerm, setAge }: any) => {
  return (
    <div className="flex gap-5 m-6 bg-[#EFEFEF] p-5 rounded-lg">



      {/* filter by species */}
      <FormControl
        color="secondary"
        size="small"
        sx={{ width: "100%", bgcolor: "white" }}
      >
        <InputLabel>Species</InputLabel>
        <Select defaultValue="" onChange={(e) => setSpecies(e.target.value)}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="dog">Dog</MenuItem>
          <MenuItem value="cat">Cat</MenuItem>
          <MenuItem value="rabbit">Rabbit</MenuItem>
          <MenuItem value="bird">Bird</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>



      {/* filter by Age */}
      <FormControl
        color="secondary"
        size="small"
        sx={{ width: "100%", bgcolor: "white" }}
      >
        <InputLabel>Age</InputLabel>
        <Select defaultValue="" onChange={(e) => setAge(e.target.value)}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>



      {/* searching */}
      <div className="flex gap-2 w-full">
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
          sx={{ color: "white", width: 150 }}
        >
          Filter
        </Button>
      </div>


    </div>
  );
};

export default FilterPet;
