import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";


const JobBid = ({jobs}) => {

    const [job, setJobs] = useState([]);

    const {user} = useContext(AuthContext);
    const {id} = useParams();
    // console.log(params)

    

    

    useEffect(() => {
        fetch(`http://localhost:5000/jobs/${id}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })

          

    }, [id, job.email])

    // console.log(job)

    const buyerEmail = job.email
    console.log(buyerEmail)

    

    const handleBids = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const buyeremail = form.buyeremail.value;
        const bidprice = form.bidprice.value;
        const jobTitle = job.job
        const deadline = form.deadline.value;
        const status = {status: 'Pending'}
        const newBid = {email, buyeremail, bidprice, deadline, jobTitle, status};
        // console.log(newBid);
       


       
            fetch('http://localhost:5000/bids', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify( newBid )
    
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
    
                    if(data.insertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Your Bid Placed Successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                          })
                    }
                })
       

    }

    console.log(job.job)

    

    return (
        <div>
             <div className="bg-[#f1f3f5] rounded-xl md:p-24 p-4 my-20">
        <h2 className="text-3xl mb-10 text-center font-extrabold">
          Place Your <span className="text-[#1e3c72]">Bid</span>
        </h2>
        <form onSubmit={handleBids}>
          {/* form emails row */}
          <div className="  gap-4 mb-8">
            <div className="form-control    ">
              <label className="label ">
                <span className="label-text ">Email</span>
              </label>
              <label className="input-group ">
                <input
                  defaultValue={user?.email}
                  
                  readOnly
                  type="email"
                  placeholder="Place Your Email"
                  name="email"
                  className="input form-border input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Buyer Email</span>
              </label>
              <label className="input-group">
              
                <input
                  type="email"
                  defaultValue={buyerEmail}
                  readOnly
                  placeholder=""
                  name="buyeremail"
                  className="input  form-border input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* from deadline and bidprice row */}
          <div className=" gap-4 mb-8">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  required
                  placeholder="Deadline"
                  name="deadline"
                  className="input  form-border input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  required
                  placeholder="Your Bidding Price"
                  name="bidprice"
                  className="input form-border  input-bordered w-full"
                />
              </label>
            </div>
          </div>

          

         
          <input
            type="submit"
            value="Bid On The Project"
            className="btn btn-block btn-grad form-border"
          />
         
        </form>
      </div>
        </div>
    );
};

export default JobBid;