import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const Sort = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-between gap-[470px] px-4">
        <div className="text-[#3D3D3D] flex items-center justify-between gap-10 text-[18px] font-semibold">
          <button className="hover:border-b-2 hover:border-b-green-600 hover:text-green-600">
            All Plants
          </button>
          <button className="hover:border-b-2 hover:border-b-green-600 hover:text-green-600">
            New Arrivals
          </button>
          <button className="hover:border-b-2 hover:border-b-green-600 hover:text-green-600">
            Sale
          </button>
        </div>
        <div className="">
          <FormControl fullWidth>
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
                <option value={20}>Small</option>
                <option value={30}>Medium</option>
                <option value={40}>Large</option>
              </NativeSelect>
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Sort;
