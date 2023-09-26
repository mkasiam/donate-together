import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
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
  console.log(DonatedFields);

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
    { name: "Category A", value: donationPercentageInTwoDigit },
    { name: "Category B", value: remainingDonation },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload[0]) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="text-center flex flex-col justify-center items-center">
      <h2 className="text-xl font-bold">Donation Pie Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
