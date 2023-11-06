import { Link, useLoaderData, useParams } from "react-router-dom";


const Jobdetails = () => {

    const jobs = useLoaderData()
    console.log(jobs)

    const {id} = useParams()
    console.log(id)

    return (
        <div className="mt-10 mb-20 p-6 bg-white border border-gray-200 rounded-lg shadow text-center">
      <a href="#">
        <h5 className="mb-2 md:text-4xl text-xl font-bold tracking-tight text-[#1e3c72] ">
          {jobs.job}
        </h5>
      </a>
      <p className="mb-3 text-lg font-medium text-gray-800">
        Deadline: {jobs.deadline}
      </p>
      <p className="mb-3 text-lg font-medium text-gray-800">
        Price Range: {jobs.minprice}$ - {jobs.maxprice}$
      </p>
      <p className="mb-3 font-normal text-gray-600 ">{jobs.description}</p>

      <Link
        
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1e3c72] rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 "
      >
        Bid Now
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
    );
};

export default Jobdetails;