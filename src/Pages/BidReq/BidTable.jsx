import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const BidTable = ({ mybid, handlejobConfirm }) => {
  const {_id, status} = mybid
  console.log(_id)



   

  return (
    <tr>
      <th>{mybid.jobTitle}</th>
  
      <td className="font-bold">{mybid.email}</td>
      <td className="font-bold">{mybid.deadline}</td>
      <td className="font-bold">{mybid.bidprice}</td>
      <td className="font-bold">Pending</td>

      <th>
        <button onClick={() => handlejobConfirm(_id)}  className="btn btn-ghost btn-sm text-white bg-[#2a5298]">
          Accept
        </button>
      </th>
      <th>
        <button className="btn btn-ghost btn-sm text-white bg-[#2a5298]">
          Reject
        </button>
      </th>
    </tr>
  );
};

BidTable.propTypes = {
  mybid: PropTypes.object,
  handlejobConfirm: PropTypes.func
};

export default BidTable;
