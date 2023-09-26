import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const Donations = useLoaderData();
  console.log(Donations);
  const { id } = useParams();
  return (
    <div>
      <h1>I am donation details{id}</h1>
      {/* Hero item from daisy ui  */}
      <div>
        <div className="w-full">
          <div
            className="bg-cover bg-center h-screen relative"
            style={{ backgroundImage: 'url("https://i.ibb.co/Wkg2Mph/Rectangle-4288.png")' }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-75 bg-black text-white py-4">
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full">
                Donate $50
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Good Education
          </h1>
          <p>
            There are many things that can be done to ensure that all people
            have access to a good education. Governments can invest in public
            schools, provide financial assistance to students, and make sure
            that all schools have qualified teachers and resources. Families can
            support their children's education by creating a learning
            environment at home and helping them with their schoolwork. Teachers
            can create a positive and supportive learning environment for their
            students and challenge them to reach their full potential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
