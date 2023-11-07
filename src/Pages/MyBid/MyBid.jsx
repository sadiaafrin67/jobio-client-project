import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBidTable from "./MyBidTable";

const MyBid = () => {
  const { user } = useContext(AuthContext);
  const [job, setJobs] = useState([]);

  const filterJob = job?.filter((job) => job?.email == user?.email);
  console.log(filterJob);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div className="mt-10 mb-20 ">
      <div className="overflow-x-auto ">
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
