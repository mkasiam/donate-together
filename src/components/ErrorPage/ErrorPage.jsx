import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center mt-20">
            <div className="text-center space-y-7">
                <p className="text-4xl font-bold ">404</p>
                <h2 className="text-lg md:text-xl lg:text-5xl font-bold">Oops!!! </h2>
                <p className="text-2xl font-bold ">Page not found</p>
                <p ><Link className="btn btn-primary rounded-md" to="/">Home</Link></p>
                
            </div>
        </div>
    );
};

export default ErrorPage;