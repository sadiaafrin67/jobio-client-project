import { Link, useLoaderData, useParams } from "react-router-dom";
import JobBid from "./JobBid";
import Lottie from "lottie-react";
import animation from "../../../../assets/detail.json"



const Jobdetails = () => {



    const jobs = useLoaderData()
    console.log(jobs)

    const {id} = useParams()
    console.log(id)

    return (
        
    <div className="md:flex felx-col">
        <div className="md:w-1/2 w-full flex justify-center">
            <Lottie animationData={animation} />
        </div>

        <div className="md:w-1/2 w-full mt-10 mb-20 p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
      <a href="#">
        <h5 className="mb-2 md:text-4xl text-xl font-bold tracking-tight text-[#1e3c72] ">
          {jobs.job}
        </h5>
      </a>
      <p className="mb-3 md:text-xl font-medium text-gray-800">
       Deadline: <span className="font-bold">{jobs.deadline}</span>
      </p>
      <p className="mb-3 md:text-xl font-medium text-gray-800">
        Price Range: <span className="font-bold">{jobs.minprice}$ - {jobs.maxprice}$</span>
      </p>
      <p className="mb-3 md:text-base font-semibold text-gray-600 ">{jobs.description}</p>

        <JobBid></JobBid>
     

    </div>

    </div>

    );
};

export default Jobdetails;
