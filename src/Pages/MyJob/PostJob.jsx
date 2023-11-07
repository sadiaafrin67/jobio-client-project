import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostJob = ({job}) => {
    return (
      <div>
          <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
          <h5 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-[#1e3c72] "><span className='font-medium text-black'>Job Posotion: </span>
           {job.job}
          </h5>
        </a>
        <p className="mb-3 md:text-xl text-lg font-medium text-gray-800">
          Posted By: <span className='text-[#1e3c72]'>{job.email}</span>
        </p>
        <p className="mb-3 text-lg font-medium text-gray-800">
          Price Range: <span className='text-[#1e3c72]'>{job.minprice}$ - {job.maxprice}$</span>
        </p>
        <p className="mb-3 font-medium text-gray-800 ">Deadline: <span className='text-[#1e3c72]'>{job.deadline}</span></p>
          
        <div className="card-actions justify-">
              <div className="btn-group btn-group-vertical space-y-4">
                <button className="btn bg-black text-white">View</button>

                <Link >
                  <button className="btn bg-black text-white">Edit</button>
                </Link>

                <button
                  
                  className="btn bg-orange-500 text-white"
                >
                  X
                </button>
              </div>
            </div>
        
      </div>


      
      </div>
    );
};

PostJob.propTypes = {
    job: PropTypes.object
};

export default PostJob;