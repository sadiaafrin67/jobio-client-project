import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";

const PostJob = ({ job }) => {
  console.log(job);

  const [jobs, setjobs] = useState([])

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/jobs/${id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
                console.log(data)
              Swal.fire("Deleted!", "Your posted job has been deleted.", "success");

              const remaining =jobs.length && jobs?.filter((item) => item._id !== id);
              console.log(remaining)

              setjobs(remaining);
            }
          });
      }
    });
  }

  return (
    <div>
      <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
          <h5 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-[#1e3c72] ">
            <span className="font-medium text-black">Job Posotion: </span>
            {job.job}
          </h5>
        </a>
        <p className="mb-3 md:text-xl text-lg font-medium text-gray-800">
          Posted By: <span className="text-[#1e3c72]">{job.email}</span>
        </p>
        <p className="mb-3 text-lg font-medium text-gray-800">
          Price Range:{" "}
          <span className="text-[#1e3c72]">
            {job.minprice}$ - {job.maxprice}$
          </span>
        </p>
        <p className="mb-3 font-medium text-gray-800 ">
          Deadline: <span className="text-[#1e3c72]">{job.deadline}</span>
        </p>

        <div className="flex items-start ">
          <Link to={`/update/${job._id}`}>
            <button className="btn btn-primary bg-[#1e3c72] text-white border-none rounded-lg capitalize">
              <BsFillPencilFill />
              Update
            </button>
          </Link>

          <Link>
            <button onClick={() => handleDelete(job._id)} className="btn btn-primary ml-3 bg-[#1e3c72] text-white border-none rounded-lg capitalize">
              <MdDelete className="text-lg"></MdDelete>Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

PostJob.propTypes = {
  job: PropTypes.object,
};

export default PostJob;
