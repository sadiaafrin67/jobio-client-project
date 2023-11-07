import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const BidTable = ({ mybid, handlejobConfirm, handlejobReject }) => {
  const { _id, status } = mybid;
  //   console.log(_id)

  return (
    <tr>
      <th>{mybid.jobTitle}</th>

      <td className="font-bold">{mybid.email}</td>
      <td className="font-bold">{mybid.deadline}</td>
      <td className="font-bold">{mybid.bidprice}</td>

      {/* {status == "Accept" ? (
        <td className="font-bold">In Progress</td>
      ) : (
        <td className="font-bold">Rejected</td>
      )} */}

      {status == "Accept" && <td className="font-bold">Accpet</td>}

      {status?.status == "Pending" && <td className="font-bold">Pending</td>}

      {status == "Reject" && <td className="font-bold">Reject</td>}

      <th>
        {status?.status == "Pending" && (
          <div>
            <button
              onClick={() => handlejobConfirm(_id)}
              className="btn btn-ghost btn-sm text-white  bg-[#2a5298]"
            >
            Accept   
            </button>{" "}
            <button
              onClick={() => handlejobReject(_id)}
              className="btn btn-ghost btn-sm text-white bg-[#2a5298]"
            >
              Reject 
            </button>
          </div>
        )}

        {status == "Accept" && (
          <div>
            <button
              disabled
              onClick={() => handlejobConfirm(_id)}
              className="btn btn-ghost btn-sm text-white  bg-[#2a5298]"
            >
              Accept     
            </button>{" "}
            <button
              disabled
              onClick={() => handlejobReject(_id)}
              className="btn btn-ghost btn-sm text-white bg-[#2a5298]"
            >
          Reject 
            </button>
          </div>
        )}

        {status == "Reject" && (
          <div>
            <button
              disabled
              onClick={() => handlejobConfirm(_id)}
              className="btn btn-ghost btn-sm text-white  bg-[#2a5298]"
            >
              Accept  
            </button>{" "}
            <button
              disabled
              onClick={() => handlejobReject(_id)}
              className="btn btn-ghost btn-sm text-white bg-[#2a5298]"
            >
               Reject 
            </button>
          </div>
        )}
      </th>
    </tr>
  );
};

BidTable.propTypes = {
  mybid: PropTypes.object,
  handlejobConfirm: PropTypes.func,
  handlejobReject: PropTypes.func,
};

export default BidTable;
