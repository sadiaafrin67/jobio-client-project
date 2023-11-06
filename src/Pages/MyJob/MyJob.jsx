import { useEffect, useState } from "react";


const MyJob = () => {

    const [jobs, setJobs] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/jobpost')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
        
    }, [])

    console.log(jobs)

    return (
        <div>
            <h2>This is MyJob: {jobs?.length} </h2>
            <div>
                {
                    jobs?.map(job => <p key={job._id}>{job.job}</p>)
                }
            </div>
        </div>
    );
};

export default MyJob;