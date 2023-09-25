const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center my-7 md:my-10 lg:my-16 space-y-4 md:space-y-5 lg:space-y-8">
      <h1 className="text-[#0B0B0B] text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        I Grow By Helping People In Need
      </h1>
      <div className="rounded-none">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered "
          />
          <button className="btn px-2 rounded-sm">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
