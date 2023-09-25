import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";

const Header = () => {
    const activeStyle = ({ isActive }) => ({
        color: isActive ? "#FF444A" : "#0B0B0B",
        textDecoration:isActive ? "underline" : "none",
      })
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
            <div>
            <img
                className="w-2xl"
                src="https://i.ibb.co/jZHBKsy/Logo.png"
                alt=""
            />
            </div>
            <div>
            <ul className="flex text-xl font-medium">
                <li className="px-4">
                <NavLink
                    to="/"
                    style={activeStyle}
                >
                    Home
                </NavLink>
                </li>
                <li className="px-4">
                <NavLink to="/donation" style={activeStyle}>Donation</NavLink>
                </li>
                <li className="px-4">
                <NavLink to="/statistics" style={activeStyle}>Statistics</NavLink>
                </li>
            </ul>
            </div>
        </div>
        <Banner></Banner>
      </div>
    </>
  );
};

export default Header;
