import PropTypes from "prop-types";
import { useState } from "react";

const MyBidTable = ({ mybid }) => {

  const [isComplete, setIsComplete] = useState(false)
  const {status} = mybid
  console.log(status)

  const dinamicStatus = () => {
    if(status == 'Accept'){
      return 'In Progress'
    }else if(status == 'Reject'){
      return 'Canceled'
    }else{
      return 'Pending'
    }
  }

  const handleComplete = () => {
    setIsComplete(true)
  }


  return (
    <tr>
      <th>{mybid.jobTitle}</th>
      <td className="font-bold">{mybid.email}</td>
      <td className="font-bold">{mybid.deadline}</td>
      <td  className="font-bold">{isComplete ? 'Completed' : dinamicStatus()}</td>


      <th>
        {
          dinamicStatus() !== 'Canceled' && !isComplete && ( <button onClick={handleComplete} disabled={dinamicStatus() === 'Pending' ? true : false } className="btn btn-ghost btn-sm text-white bg-[#2a5298]">
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
