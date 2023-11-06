import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBidTable from "./MyBidTable";


const MyBid = () => {

    const [myBid, setMyBid] = useState([]);
    const { user } = useContext(AuthContext);

    const filterUser = myBid.filter(myBid => myBid.email == user?.email);

    useEffect(() => {
        fetch('http://localhost:5000/mybid')
            .then(res => res.json())
            .then(data => {
                setMyBid(data)
            })
    }, [])
    console.log(myBid)

    return (
        <div>
            <h2>This is MyBid: {myBid?.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Job Title</th>
        <th>Email</th>
        <th>Deadline</th>
        <th>Status</th>
        <th>Status</th>
        
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