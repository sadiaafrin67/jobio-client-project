import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Job from "./Job";

const JobCat = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("Web Development");
  console.log(active);
  console.log(loading);

  useEffect(() => {
    fetch("https://jobio-server.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const categoryName = [];
  for (const job of jobs) {
    if (!categoryName.includes(job.category)) {
      categoryName.push(job.category);
    }
  }

  // console.log(categoryName)

  const filteredJob = jobs.filter((job) => job.category == active);
  console.log(filteredJob);

  const handleJobs = (jobName) => {
    setActive(jobName);
  };

  return (
    <div className="mb-20">
      <Tabs className="">
        <TabList className="md:text-xl text-sm font-bold">
          {categoryName.map((job) => (
            <Tab key={job} onClick={() => handleJobs(job)}>
              {job}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          {loading && (
            <div className="flex w-full h-[80vh] justify-center items-center ">
              <span className="loading loading-spinner text-info w-[4rem] h-[4rem]"></span>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {!loading &&
              filteredJob.map((job) => <Job key={job._id} job={job}></Job>)}
          </div>
        </TabPanel>

        <TabPanel>
          {loading && (
            <div className="flex w-full h-[80vh] justify-center items-center ">
              <span className="loading loading-spinner text-info w-[4rem] h-[4rem]"></span>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {!loading &&
              filteredJob.map((job) => <Job key={job._id} job={job}></Job>)}
          </div>
        </TabPanel>
        <TabPanel>
          {loading && (
            <div className="flex w-full h-[80vh] justify-center items-center ">
              <span className="loading loading-spinner text-info w-[4rem] h-[4rem]"></span>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {!loading &&
              filteredJob.map((job) => <Job key={job._id} job={job}></Job>)}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCat;
