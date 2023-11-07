import PropTypes from 'prop-types';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MyBidTable = ({mybid}) => {

  const [job, setJobs] = useState([]);

    const {user} = useContext(AuthContext);

   useEffect(() => {
    fetch('http://localhost:5000/jobs')
    .then(res => res.json())
    .then(data => {
        setJobs(data)
    })
   }, [])

   const title = job?.job
   console.log(title)
     

    return (
        <tr>
        <th>
         aa
        </th>
        <td className='font-bold'>
         
           {mybid.email}
        </td>
        <td className='font-bold'>
          {mybid.deadline}
          
        </td>
        <td className='font-bold'>Pending</td>
       
        <th>
       <button className='btn btn-ghost btn-sm text-white bg-[#2a5298]'>Complete</button>
        </th>
      </tr>
    );
};

MyBidTable.propTypes = {
    mybid: PropTypes.object
}



export default MyBidTable;