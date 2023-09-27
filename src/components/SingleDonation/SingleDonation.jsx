import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const SingleDonation = ({singleDonation}) => {
    const {id,small_banner_img,title,donation_amount,category_name,card_color,card_common_color} = singleDonation;
    return (
        <div>
            <div className="flex gap-7 items-center" style={{backgroundColor:`${card_color}`}}>
                <div>
                    <img className="rounded-sm" src={small_banner_img} alt="No Image Found" />
                </div>
                <div>
                    <p style={{backgroundColor:`${card_color}`,color:`${card_common_color}`}} className="max-w-fit p-2 rounded-sm font-medium">{category_name}</p>
                    <h1 className="text-[#0B0B0B] font-semibold">{title}</h1>
                    <p style={{color:`${card_common_color}`}} className="font-semibold text-lg">$ {donation_amount}</p>
                    <Link to={`/donation/${id}`}>
                        <button style={{backgroundColor:`${card_common_color}`}} className="btn btn-primary text-white rounded-sm outline-0    border-none">Show Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};
SingleDonation.propTypes={
    singleDonation:PropTypes.object.isRequired
}
export default SingleDonation;