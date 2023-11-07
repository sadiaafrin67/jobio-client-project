import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBidTable from "./MyBidTable";
import { useLoaderData } from "react-router-dom";


const MyBid = () => {

    const [myBid, setMyBid] = useState([]);
    const { user } = useContext(AuthContext);

    // const data = useLoaderData()
    // console.log(data)

    const filterUser = myBid?.filter(myBid => myBid?.email == user?.email);

    useEffect(() => {
        fetch('http://localhost:5000/mybid')
            .then(res => res.json())
            .then(data => {
                setMyBid(data)
            })
    }, [])
    // console.log(myBid)

    return (
        <div className="mt-10 mb-20 ">
          
            <div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead>
  
     <tr>
        
        <th className="md:text-3xl text-sm font-bold text-[#2a5298]">Job Title</th>
        <th className="md:text-3xl text-sm font-bold text-[#2a5298]">Email</th>
        <th className="md:text-3xl text-sm font-bold text-[#2a5298]">Deadline</th>
        <th className="md:text-3xl text-sm font-bold text-[#2a5298]">Status</th>
       
        
      </tr>
  
    </thead>
    <tbody>
      {
        filterUser.map(mybid => <MyBidTable key={mybid._id} mybid={mybid}></MyBidTable>)
      }
      
     
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default MyBid;