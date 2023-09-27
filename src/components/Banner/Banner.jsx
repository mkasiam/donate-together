import PropTypes from 'prop-types';
const Banner = ({handleSearch,setInputValue}) => {
  const headerStyle = {
    backgroundImage: 'url("https://i.ibb.co/tPz3tK9/Rectangle-4281.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "300px",
  };
  
  return (
    <div
      style={headerStyle}
      className="flex flex-col items-center justify-center my-7 md:my-10 lg:my-12 space-y-4 md:space-y-5 lg:space-y-8"
    >
      <h1 className="text-black bg-[#E7EFD9] p-2 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        I Grow By Helping People In Need
      </h1>
      <div>
        <input
          type="text"
          placeholder="Search by category…"
          className="input rounded-sm"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-[#FF444A] text-white py-2 btn px-2 rounded-sm"
        >
          Search
        </button>
      </div>
    </div>
  );
};
Banner.propTypes={
  handleSearch:PropTypes.func.isRequired,
  setInputValue:PropTypes.func.isRequired


}
export default Banner;
