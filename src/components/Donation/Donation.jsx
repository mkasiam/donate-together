import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationData } from "../../../utilities/localStorage";
import SingleDonation from "../SingleDonation/SingleDonation";

const Donation = () => {
    const donationsData = useLoaderData();
    const [donated,setDonated] = useState([]);

    useEffect(()=>{
        const storedDonationId = getDonationData();
        if(donationsData.length > 0){
            const donated = [];
            for (const id of storedDonationId) {
                const donatedCheck = donationsData.find(singleDonation => singleDonation.id === id);
                if (donatedCheck) {
                    donated.push(donatedCheck)
                }
            }
            setDonated(donated);
        }
    },[])
    console.log(donated);

    return (
        <div>
            <h1>Landed on donation page{donated.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
                {
                    donated.map((singleDonation)=><SingleDonation singleDonation={singleDonation}  key={singleDonation.id}></SingleDonation>)
                }
            </div>
        </div>
    );
};

export default Donation;