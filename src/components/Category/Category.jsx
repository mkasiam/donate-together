import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Category = ({category}) => {
    const {id,img,card_color,category_name,title,card_common_color}=category;
    
    return (
        <div>
            <Link to={`/donation/${id}`}>
                <div style={{backgroundColor:`${card_color}`}} className={`rounded-md`}>
                    <div className=" rounded-md">
                        <img className="w-full" src={img} alt="No image found" />
                    </div>
                    <div style={{color:`${card_common_color}`}} className="py-4 space-y-2 p-4">
                        <p style={{backgroundColor:`${card_color}`}}  className="p-2  max-w-fit rounded-md font-medium">{category_name}</p>
                        <h1 className="text-xl font-semibold">{title}</h1>
                    </div>
                </div>
            </Link>
            
        </div>
    );
};
Category.propTypes={
    category:PropTypes.object.isRequired
}
export default Category;