import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";


const Sort = () => {
  const [value, setValue] = React.useState("one");

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className="container mx-auto px-4 flex justify-between gap-[470px] items-center">
        <div className="">
          <Tabs
            value={value}
            onChange={handleChangeTab}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example"
            className="text-[20px]"
          >
            <Tab
              value="all plants"
              label="All Plants"
              className="text-[20px]"
            />
            <Tab value="new arrivals" label="New Arrivals" />
            <Tab value="sale" label="Sale" />
          </Tabs>
        </div>
        <div className="">
          {/* <Box sx={{ minWidth: 120 }}> */}
          <FormControl fullWidth>
            {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Sort
              </InputLabel> */}
            <div className="flex items-center gap-4">
              <span className="text-[18px]">Short by:</span>
              <NativeSelect
                defaultValue={10}
                inputProps={{
                  name: "sort",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>Default by Sorting</option>
                <option value={20}>New Products</option>
                <option value={30}>Sale Products</option>
                <option value={40}>House Plants</option>
              </NativeSelect>
            </div>
          </FormControl>
          {/* </Box> */}
        </div>
      </div>
    </div>
  );
};

export default Sort;
