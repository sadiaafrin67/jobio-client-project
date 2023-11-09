import PropTypes from "prop-types";
import { useState } from "react";

const MyBidTable = ({ mybid }) => {

  const [isComplete, setIsComplete] = useState(false)
  const {status, _id} = mybid
  // console.log(status)

  const dinamicStatus = () => {
    if(status == 'Accept'){
      return 'In Progress'
    }else if(status == 'Reject'){
      return 'Canceled'
    }else{
      return 'Pending'
    }
  }
// console.log(_id)

  const handleComplete = () => {
  
    handleConfirm(_id)
    setIsComplete(true)
  }


  const handleConfirm = id => {
    fetch(`https://jobio-server.vercel.app/bids/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'Complete'})
    } )
    .then(res => res.json())    
    .then(data => {
        console.log(data)
        // if(data.modifiedCount > 0){
        //     const remaining = bidReq.filter(bid => bid._id !== id);
        //     const updated = bidReq.find(bid => bid._id == id);
        //     console.log(updated)

        //     updated.status = 'Accept';
        //     const newBidReq = [updated, ...remaining];
        //     setBidReq(newBidReq);
        // }
    })
}



  return (
    <tr>
      <th>{mybid.jobTitle}</th>
      <td className="font-bold">{mybid.email}</td>
      <td className="font-bold">{mybid.deadline}</td>
      <td  className="font-bold">{isComplete || status === 'Complete' ? 'Completed' : dinamicStatus()}</td>


      <th>
        {
          dinamicStatus() !== 'Canceled' && status !== 'Complete' &&  !isComplete && ( <button onClick={handleComplete} disabled={dinamicStatus() === 'Pending' ? true : false } className="btn btn-ghost btn-sm text-white bg-[#2a5298]">
          Complete
        </button>)
        }

        {/* <button disabled={dinamicStatus() === 'Pending' ? true : false } className="btn btn-ghost btn-sm text-white bg-[#2a5298]">
          Complete
        </button> */}
      </th>
    </tr>
  );
};

MyBidTable.propTypes = {
  mybid: PropTypes.object,
};

export default MyBidTable;
