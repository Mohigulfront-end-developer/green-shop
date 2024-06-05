import { useState } from "react";
import Cart from "./Cart";
import Data from "../../utils/data";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ProductList = ({ count, show }) => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; 

  // Filtered data based on category and search
  const filteredData = Data.filter((plants) => {
    if (category === "item") {
      return plants.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return (
        category === plants.category &&
        plants.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  // Calculate the items to display based on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="">
      <div className="grid grid-cols-4 gap-4 mb-6">
        {show
          ? currentItems.map((plants) => (
              <Cart
                key={plants.id}
                id={plants.id}
                name={plants.name}
                price={plants.price}
                desc={plants.description}
                rating={plants.rating}
                image={plants.image}
              />
            ))
          : currentItems.map(
              (plants) =>
                plants.category[0] == count[0] && (
                  <Cart
                    key={plants.id}
                    id={plants.id}
                    name={plants.name}
                    price={plants.price}
                    desc={plants.description}
                    rating={plants.rating}
                    image={plants.image}
                  />
                )
            )}
      </div>
      <div className="flex justify-end my-[100px]">
        <Stack spacing={1}>
          <Pagination
            count={Math.ceil(filteredData.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            // className="hover:bg-green-600 hover:text-white"
          />
        </Stack>
      </div>
    </div>
  );
};

export default ProductList;
