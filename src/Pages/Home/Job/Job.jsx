import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useContext,  useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useEffect } from "react";

const Job = ({ job }) => {
  // console.log(job)

  const [allow, setallow] = useState(true)
  console.log(allow)

  const {user} = useContext(AuthContext);
  // console.log(user?.email)



  

  useEffect( () => {
    if(job.email == user?.email){
      setallow(false)
    }
  }, [job.email, user])
  

  


  return (
    <div  className=" p-6 bg-white border border-gray-200 rounded-lg shadow ">
      <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-[#1e3c72] ">
          {job.job}
        </h5>
      </a>
      <p className="mb-3 text-lg font-medium text-gray-800">
        Deadline: {job.deadline}
      </p>
     
      <p className="mb-3 text-lg font-medium text-gray-800">
        Price Range: {job.minprice}$ - {job.maxprice}$
      </p>
      <p className="mb-3 font-normal text-gray-600 ">{job.description}</p>

      <Link
        to={`/job/${job._id}`}
       
      >
        <button  className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1e3c72] rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 ${allow ? '' : 'disabled bg-gray-400 hover:bg-gray-400'}`} disabled={!allow}>
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
        </button>
      </Link>



    </div>
  );
};

Job.propTypes = {
  job: PropTypes.string,
};

export default Job;
