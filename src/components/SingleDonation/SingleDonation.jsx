const SingleDonation = ({singleDonation}) => {
    console.log(singleDonation);
    return (
        <div>
            <div className="flex justify-center items-center">
                <div>
                    <img src="" alt="No Image Found" />
                </div>
                <div>
                    <p className="max-w-fit bg-red-300 p-2 rounded-sm">heath</p>
                    <h1 className="text-[#0B0B0B] font-semibold">Clean water for children</h1>
                    <p>290$</p>
                    <button className="btn btn-primary">Show Details</button>

                </div>
            </div>
        </div>
    );
};

export default SingleDonation;