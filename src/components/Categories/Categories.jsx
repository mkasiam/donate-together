import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = ({inputValue}) => {
    const [categories,setCategories]= useState([]);
    useEffect(()=>{
        fetch("categories.json")
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },
    [])
    console.log(inputValue);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 mb-6">
                {
                    categories.map((category)=><Category category={category} key={category.id}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;