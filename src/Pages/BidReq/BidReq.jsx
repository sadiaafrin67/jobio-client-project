import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import BidTable from "./BidTable";



const BidReq = () => {

    const [bidReq, setBidReq] = useState([]);

    const {user} = useContext(AuthContext);

    const filterJob = bidReq?.filter(myBid => myBid?.buyeremail
        == user?.email);

        const [job, setJobs] = useState([]);

        const filterJobs = job?.filter((job) => job?.email == user?.email);
        // console.log(filterJobs);


    useEffect(() => {
        fetch('http://localhost:5000/bids')
            .then(res => res.json())
            .then(data => {
                setBidReq(data)
            })
    }, [])
//  console.log(filterJob)

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])
    // console.log(job)

    const handlejobConfirm = id => {
        fetch(`http://localhost:5000/bids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Accept'})
        } )
        .then(res => res.json())    
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = bidReq.filter(bid => bid._id !== id);
                const updated = bidReq.find(bid => bid._id == id);
                updated.status = 'Accept';
                const newBidReq = [updated, ...remaining];
                setBidReq(newBidReq);
            }
        })
    }


    const handlejobReject = id => {
        fetch(`http://localhost:5000/bids/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Reject'})
        } )
        .then(res => res.json())    
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = bidReq.filter(bid => bid._id !== id);
                const updated = bidReq.find(bid => bid._id == id);
                updated.status = 'Reject';
                const newBidReq = [updated, ...remaining];
                setBidReq(newBidReq);
            }
        })
    }

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
                  Price
                </th>
                <th className="md:text-3xl text-sm font-bold text-[#2a5298]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filterJob.map((mybid) => (
               <BidTable handlejobReject={handlejobReject}  handlejobConfirm={handlejobConfirm} key={mybid._id} mybid={mybid}></BidTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default BidReq;