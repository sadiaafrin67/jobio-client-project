// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
// import MyBidTable from "./MyBidTable";



// import { Helmet } from "react-helmet-async";


// const MyBid = () => {
//   const { user } = useContext(AuthContext);
//   const [filterJobs, setFilterJobs] = useState([]);
//   const [sortedJob, setSortedJob] = useState([]);
//   const [isFetched, setIsFetched] = useState(false);
//   const [isSorted, setIsSorted] = useState(false);
//   const [job, setJobs] = useState([]);
//   const [myJob, setMyJobs] = useState([]);
//   // console.log(job)

//   // const filterJob = myJob?.filter((job) => job?.email == user?.email);
//   // console.log(filterJob);

//   // const sortedData = filterJob?.sort((a, b) => a.status.localeCompare(b.status));

//   // const data = [
//   //   // Your data here
//   // ];

//   // // Sort the data in ascending order based on the "status" property
//   // const sortedData = filterJob.sort((a, b) => a.status.localeCompare(b.status));

//   // console.log(sortedData);
 
//   console.log(myJob)

//   useEffect(() => {
//     fetch("https://jobio-server.vercel.app/jobs")
//       .then((res) => res.json())
//       .then((data) => {
//         setJobs(data);
//         setIsFetched(true);
//       });
//   }, []);

//   useEffect(() => {
//     fetch("https://jobio-server.vercel.app/bids")
//       .then((res) => res.json())
//       .then((data) => {
//         setMyJobs(data);
//       });
//   }, []);

//   useEffect(() => {
//     if (job.length !== 0) {
//       const filterJob = myJob?.filter((job) => job?.email == user?.email);
//       // const sortedData = filterJob?.sort((a, b) => a?.status?.localeCompare(b.status));
//       setFilterJobs(filterJob);
//       // setSortedJob(sortedData);

//       // const sortedData = filterJob?.sort((a, b) => {
//       //   // a?.status?.localeCompare(b.status);
//       //   console.log(a);
//       //   console.log(b);
        
//       //   const valueOne = a?.status || a.status?.status
//       //   const valueTwo = b?.status || b.status?.status

//       //   return valueOne?.localeCompare(valueTwo); 
//       // });
  
//     }
//   }, [job.length, myJob, user?.email]);
//   console.log(filterJobs);

//   // console.log(myJob.jobTitle)

//   // const handleSort = () => {
//   //   console.log("clicked");
//   //   setIsSorted(true);
//   // };

//   return (
//     <div className="mt-10 mb-20 ">
//       <Helmet>
//         <title>JobIO | My Bid</title>
//       </Helmet>

//       <div className="overflow-x-auto ">
//         <div className="text-end my-3">
//           <button
          
//             className="btn rounded-lg btn-outline btn-info"
//           >
//             Sort
//           </button>
//         </div>

//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th className="md:text-3xl text-sm font-bold text-[#2a5298]">
//                 Job Title
//               </th>
//               <th className="md:text-3xl text-sm font-bold text-[#2a5298]">
//                 Email
//               </th>
//               <th className="md:text-3xl text-sm font-bold text-[#2a5298]">
//                 Deadline
//               </th>
//               <th className="md:text-3xl text-sm font-bold text-[#2a5298]">
//                 Status
//               </th>
//             </tr>
//           </thead>
          // <tbody>
          //   {!isSorted &&
          //     filterJobs?.length !== 0 &&
          //     filterJobs?.map((mybid) => (
          //       <MyBidTable key={mybid._id} mybid={mybid}></MyBidTable>
          //     ))}
          //   {isSorted &&
          //     sortedJob?.length !== 0 &&
          //     sortedJob?.map((mybid) => (
          //       <MyBidTable key={mybid._id} mybid={mybid}></MyBidTable>
          //     ))}
          // </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyBid;


import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBidTable from "./MyBidTable";
import { Helmet } from "react-helmet-async";

const MyBid = () => {



const { user } = useContext(AuthContext);
const [myJob, setMyJobs] = useState([]); 
const [sortedJobs, setSortedJobs] = useState([]);


useEffect(() => {
  fetch("https://jobio-server.vercel.app/bids")
    .then((res) => res.json())
    .then((data) => {
      const filterJob = data?.filter((job) => job?.email === user?.email && job?.status?.status !== 'Pending');
      setMyJobs(filterJob); // Set all data to myJob state
    });
}, []);

const handleSort = () => {
  if (myJob.length > 0) {
    const sorted = myJob.slice().sort((a, b) => {
      const statusOrder = { Complete: 1, Accept: 2, Reject: 3 };
      return statusOrder[a.status.status || a.status] - statusOrder[b.status.status || b.status];
    });
    setSortedJobs([...sorted]);
  }
};



  return (
<div className="mt-10 mb-20 ">
  <Helmet>
    <title>JobIO | My Bid</title>
  </Helmet>

  <div className="text-end my-3 mr-2">
      <button onClick={handleSort} className="btn rounded-lg btn-outline btn-info" >
        Sort
      </button>
    </div>

    <p className="text-2xl font-bold text-center mb-8">My Job <span className="text-[#2a5298]">Bids</span></p>

  <div className="overflow-x-auto ">
  

    <table className="table">
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
        {(sortedJobs.length > 0 ? sortedJobs : myJob).map((mybid) => (
          <MyBidTable key={mybid._id} mybid={mybid}></MyBidTable>
        ))}
      </tbody>
    </table>
  </div>
</div>


  );
};

export default MyBid;








