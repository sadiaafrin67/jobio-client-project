import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Job from './Job';
import axios from 'axios';

const JobCat = () => {

    const [jobs, setJobs] = useState([]);
    const [active, setActive] = useState('Web Development');
    console.log(active)



    useEffect(() => {

      




        fetch('https://jobio-server.vercel.app/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, []);

    const categoryName = [];
    for(const job of jobs){

        if(!categoryName.includes(job.category)){
            categoryName.push(job.category);
        }
    }

    // console.log(categoryName)

    const filteredJob = jobs.filter(job => job.category == active)
    console.log(filteredJob)

    const handleJobs = (jobName) => {
        setActive(jobName)
    }

    return (
        <div className='mb-20'>
            <Tabs className=''>
    <TabList className='md:text-xl text-sm font-bold'>
        {
            categoryName.map(job => (<Tab   key={job}   onClick={() => handleJobs(job)} >{job}</Tab>))
        }   

    </TabList>

    <TabPanel>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
            filteredJob.map(job => (
                <Job key={job._id} job={job}></Job>
            ))
        }
      </div>
    </TabPanel> 
    <TabPanel>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
            filteredJob.map(job => (
                <Job key={job._id} job={job}></Job>
            ))
        }
      </div>
    </TabPanel> 
    <TabPanel>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
            filteredJob.map(job => (
                <Job key={job._id} job={job}></Job>
            ))
        }
      </div>
    </TabPanel> 
    
  </Tabs>
        </div>
    );
};

export default JobCat;
