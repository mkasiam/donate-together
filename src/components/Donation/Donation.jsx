import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationData } from "../../../utilities/localStorage";

const Donation = () => {
    const donationsData = useLoaderData();
    const [donations,setDonations] = useState([]);

    useEffect(()=>{
        const storedDonationId = getDonationData();
    })
    return (
        <div>
            <h1>Landed on donation page</h1>
        </div>
    );
};

export default Donation;