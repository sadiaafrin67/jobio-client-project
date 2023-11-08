import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBidTable from "./MyBidTable";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const MyBid = () => {
  const { user } = useContext(AuthContext);
  const [job, setJobs] = useState([]);
  const [myJob, setMyJobs] = useState([]);
  // console.log(job)

  const filterJob = myJob?.filter((job) => job?.email == user?.email);
  console.log(filterJob);

 

 

  useEffect(() => {
    fetch("https://jobio-server.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://jobio-server.vercel.app/bids")
      .then((res) => res.json())
      .then((data) => {
        setMyJobs(data);
      });
  }, []);

  // console.log(myJob.jobTitle)

  return (
    <div className="mt-10 mb-20 ">
      <Helmet>
        <title>JobIO | My Bid</title>
      </Helmet>

      <div className="overflow-x-auto ">
        <div className="text-end my-3">
          <button className="btn rounded-lg btn-outline btn-info">Sort</button>
        </div>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="md:text-3xl text-sm font-bold text-[#2a5298]">
                Job Title
              </th>
              <th className="md:text-3xl text-sm font-bold text-[#2a5298]">
                Email
              </th>
              <th className="md:text-3xl text-sm font-bold text-[#2a5298]">
                Deadline
              </th>
              <th className="md:text-3xl text-sm font-bold text-[#2a5298]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filterJob.map((mybid) => (
              <MyBidTable key={mybid._id} mybid={mybid}></MyBidTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBid;
