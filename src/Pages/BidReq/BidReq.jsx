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


    useEffect(() => {
        fetch('http://localhost:5000/bids')
            .then(res => res.json())
            .then(data => {
                setBidReq(data)
            })
    }, [])
 console.log(filterJob)

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
               <BidTable key={mybid._id} mybid={mybid}></BidTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default BidReq;