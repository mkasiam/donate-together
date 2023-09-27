import { useState } from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSearch = () => {
    setInputValue(inputValue);
  };
  return (
    <div>
      <Banner
        handleSearch={handleSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></Banner>
      <Categories inputValue={inputValue}></Categories>
    </div>
  );
};

export default Home;
