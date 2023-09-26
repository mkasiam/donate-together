import { Link } from "react-router-dom";

const Category = ({category}) => {
    const {id,img,card_color,category_name,title,card_common_color}=category;
    
    return (
        <div>
            <Link to={`/donation/${id}`}>
                <div className={`rounded-md`}>
                    <div className=" rounded-md">
                        <img className="w-full rounded-md" src={img} alt="No image found" />
                    </div>
                    <div className="py-4 space-y-2">
                        <p className={`p-2 bg-slate-300 max-w-fit rounded-md`}>{category_name}</p>
                        <h1 className="text-xl">{title}</h1>
                    </div>
                </div>
            </Link>
            
        </div>
    );
};

export default Category;