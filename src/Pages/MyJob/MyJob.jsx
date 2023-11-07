import { useContext, useEffect, useState } from "react";
import PostJob from "./PostJob";
import { AuthContext } from "../../Providers/AuthProvider";


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
        <div>
            <h2>This is MyJob: {jobs?.length} </h2>
            <div>
                {
                    filterUser?.map(job => <PostJob key={job._id} job={job}></PostJob>)
                }
            </div>
        </div>
    );
};

export default MyJob;