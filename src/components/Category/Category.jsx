import { Link } from "react-router-dom";

const Category = ({category}) => {
    const {id,img,category_name,title}=category;
    return (
        <div>
            <Link to={`/${id}`}>
                <div>
                    <div className="border border-black rounded-md">
                        <img className="w-full rounded-md" src={img} alt="No image found" />
                    </div>
                    <div>
                        <p className="p-2 bg-slate-300 max-w-fit rounded-md">{category_name}</p>
                        <h1 className="text-xl">{title}</h1>
                    </div>
                </div>
            </Link>
            
        </div>
    );
};

export default Category;