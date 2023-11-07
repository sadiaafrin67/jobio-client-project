import PropTypes from "prop-types";

const MyBidTable = ({ mybid }) => {
  console.log(mybid)
  return (
    <tr>
      <th>{mybid.job}</th>
      <td className="font-bold">{mybid.email}</td>
      <td className="font-bold">{mybid.deadline}</td>
      <td className="font-bold">Pending</td>

      <th>
        <button className="btn btn-ghost btn-sm text-white bg-[#2a5298]">
          Complete
        </button>
      </th>
    </tr>
  );
};

MyBidTable.propTypes = {
  mybid: PropTypes.object,
};

export default MyBidTable;
