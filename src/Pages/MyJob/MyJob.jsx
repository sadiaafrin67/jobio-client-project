import { useContext, useEffect, useState } from "react";
import PostJob from "./PostJob";
import { AuthContext } from "../../Providers/AuthProvider";
import Lottie from 'lottie-react'
import animation from '../../assets/job-post.json'
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
// import animation from '../../assets/no data.json'

const MyJob = () => {

    const [jobs, setJobs] = useState();
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch('https://jobio-server.vercel.app/jobpost')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
        
    }, [])

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
            fetch(`https://jobio-server.vercel.app/jobs/${id}`, {
              method: "DELETE"
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    console.log(data)
                  Swal.fire("Deleted!", "Your posted job has been deleted.", "success");

                  const remaining = jobs.filter(job => job._id !== id);
                  setJobs(remaining)
    
                  
                }
              });
          }
        });
      }

    const filterUser = jobs?.filter(myBid => myBid?.email == user?.email);

    console.log(jobs)

    return (
        <div className="mt-10 mb-20 lg:flex lg:flex-row-reverse">
          <Helmet>
            <title>JobIO | My Posted Job</title>
          </Helmet>

<div className='lg:w-1/2 w-full'>
            <Lottie animationData={animation}></Lottie>

          </div>
         
            <div className="space-y-4 lg:w-1/2 w-full">
                {
                    filterUser?.map(job => <PostJob handleDelete={handleDelete} key={job._id}   job={job}></PostJob>)
                }
            </div>
        </div>
    );
};

export default MyJob;







