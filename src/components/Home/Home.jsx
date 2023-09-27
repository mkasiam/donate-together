import { useState } from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [filterData,setFilterData] = useState([]);
  const categories = useLoaderData();
  const handleSearch = () => {
    setInputValue(inputValue);
    const filteredCategories = categories.filter((category)=>category.category_name === inputValue);
    setFilterData(filteredCategories);
  };
  
  return (
    <div>
      <Banner
        handleSearch={handleSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></Banner>
      <Categories filterData={filterData}></Categories>
    </div>
  );
};

export default Home;
