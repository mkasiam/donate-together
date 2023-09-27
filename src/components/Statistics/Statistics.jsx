import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
import { getDonationData } from "../../../utilities/localStorage";

function getDonationInfoById(id, categories) {
  return categories.find((category) => category.id === id);
}

const Statistics = () => {
  const categories = useLoaderData();
  const alreadyDonatedIds = getDonationData();
  const DonatedFields = alreadyDonatedIds.map((id) =>
    getDonationInfoById(id, categories)
  );

  const totalDonationAmount = categories.reduce((accumulator, category) => {
    return accumulator + category.donation_amount;
  }, 0);

  const alreadyDonatedAmount = DonatedFields.reduce((accumulator, category) => {
    return accumulator + category.donation_amount;
  }, 0);
  const donationPercentage = (alreadyDonatedAmount / totalDonationAmount) * 100;
  const donationPercentageInTwoDigit = +donationPercentage.toFixed(2);
  const remainingDonation = +(100 - donationPercentage).toFixed(2);

  const data = [
    ["Donation", "Donation Amount"],
    ["Total Donation", donationPercentageInTwoDigit],
    ["Your Donation", remainingDonation],
    
  ];

  const options = {
    title: "Donation Details",
  };

  return (
    <Chart
      className="my-4"
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default Statistics;
