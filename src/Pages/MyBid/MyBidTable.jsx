

const MyBidTable = () => {
    return (
        <tr>
        <th>
    <button  className="btn btn-sm btn-circle">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
         
            <div className="avatar">
              <div className="rounded w-24 h-24">
                {/* {img && <img src={img} />} */}
              </div>
            
            
          </div>
        </td>
        <td>
          aa
          
        </td>
        <td>dd</td>
        <td>dd</td>
        <th>
         {
         status === 'confirm' ? <span className="font-bo;d text-primary">Confirmed</span> : 
         <button  className="btn btn-ghost btn-xs">Please Confirm</button>}
        </th>
      </tr>
    );
};

export default MyBidTable;