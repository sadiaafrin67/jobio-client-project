import { useContext, useEffect, useState } from "react";
import PostJob from "./PostJob";
import { AuthContext } from "../../Providers/AuthProvider";
import Lottie from 'lottie-react'
import animation from '../../assets/job-post.json'

const MyJob = () => {

    const [jobs, setJobs] = useState();
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/jobpost')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
        
    }, [])

    const filterUser = jobs?.filter(myBid => myBid?.email == user?.email);

    console.log(jobs)

    return (
        <div className="mt-10 mb-20 lg:flex lg:flex-row-reverse">

<div className='lg:w-1/2 w-full'>
            <Lottie animationData={animation}></Lottie>

          </div>
         
            <div className="space-y-4 lg:w-1/2 w-full">
                {
                    filterUser?.map(job => <PostJob key={job._id} job={job}></PostJob>)
                }
            </div>
        </div>
    );
};

export default MyJob;