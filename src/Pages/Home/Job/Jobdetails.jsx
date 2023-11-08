import { Link, useLoaderData, useParams } from "react-router-dom";
import JobBid from "./JobBid";
import Lottie from "lottie-react";
import animation from "../../../assets/detail.json";
import { Helmet } from "react-helmet-async";

const Jobdetails = () => {
  const jobs = useLoaderData();
  console.log(jobs);

  const { id } = useParams();
  console.log(id);

  return (
    <div className="lg:flex felx-col">
      <Helmet>
        <title>JobIo | Bid</title>
      </Helmet>
      <div className="lg:w-1/2 w-full flex justify-center lg:h-[800px]">
        <Lottie animationData={animation} />
      </div>

      <div className="lg:w-1/2 w-full mt-10 mb-20 p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
        <a href="#">
          <h5 className="mb-2 md:text-4xl text-xl font-bold tracking-tight text-[#1e3c72] ">
            {jobs.job}
          </h5>
        </a>
        <p className="mb-3 text-gray-600 md:text-xl font-medium ">
          Deadline: <span className="font-bold">{jobs.deadline}</span>
        </p>
        <p className="mb-3 md:text-xl font-medium text-gray-600">
          Price Range:{" "}
          <span className="font-bold">
            {jobs.minprice}$ - {jobs.maxprice}$
          </span>
        </p>
        <p className="mb-3 text-gray-500 md:text-base font-semibold  ">
          {jobs.description}
        </p>

       <JobBid jobs={jobs}></JobBid>
      </div>
    </div>
  );
};

export default Jobdetails;
