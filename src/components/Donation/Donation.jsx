import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationData } from "../../../utilities/localStorage";
import SingleDonation from "../SingleDonation/SingleDonation";

const Donation = () => {
  const donationsData = useLoaderData();
  const [donated, setDonated] = useState([]);
  const [dataLength,setDataLength] = useState(4);
  const handleShowAll =() =>{
    setDataLength(donated.length)
  }

  useEffect(() => {
    const storedDonationId = getDonationData();
    if (donationsData.length > 0) {
      const donated = [];
      for (const id of storedDonationId) {
        const donatedCheck = donationsData.find(
          (singleDonation) => singleDonation.id === id
        );
        if (donatedCheck) {
          donated.push(donatedCheck);
        }
      }
      setDonated(donated);
    }
  }, [donationsData]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 mt-5 rounded-sm mb-7">
        {donated. slice(0,dataLength).map((singleDonation) => (
          <SingleDonation
            singleDonation={singleDonation}
            key={singleDonation.id}
          ></SingleDonation>
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <div className={dataLength === donated.length || donated.length <= 4 ? "hidden" : ""}>
           <button onClick={handleShowAll} className="btn btn-primary rounded-sm text-center">Show All</button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
