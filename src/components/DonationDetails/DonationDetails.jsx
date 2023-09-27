import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonationData } from "../../../utilities/localStorage";

const DonationDetails = () => {
  const Donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = Donations.find(donation => donation.id === idInt);
  const {img,title,description,card_common_color} = donation;
  const handleDonationData = () =>{
    saveDonationData(idInt);
    toast('Donation Successfully Done');
  }
  return (
    <div className="mt-3">
      {/* Hero item from daisy ui  */}
      <div>
        <div className="w-full">
          <div
            className="bg-cover bg-center h-screen relative"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="z-0 absolute bottom-0 left-0 right-0 bg-opacity-40   bg-black text-white py-4 ">
              <button onClick={handleDonationData} style={{backgroundColor:`${card_common_color}`}} className="z-10 text-white font-semibold py-2 px-4 rounded-sm ml-3">
                Donate $50
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            {title}
          </h1>
          <p>
            {description}
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
