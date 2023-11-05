

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddJob = () => {


    const {user} = useContext(AuthContext);
    console.log(user)

  const handleAddJob = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const job = form.job.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const maxprice = form.maxprice.value;
    const minprice = form.minprice.value;
    const category = form.category.value;

    const newProduct = {
      email,
      job,
      deadline,
      description,
      maxprice,
      minprice,
      category
    };
    // console.log(newProduct);

   

    fetch('http://localhost:5000/jobs', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Job Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
  };

  return (
    <div>
      <div className="bg-[#f1f3f5] rounded-xl md:p-24 p-4 my-20">
        <h2 className="text-3xl mb-10 text-center font-extrabold">
          Add Your <span className="text-[#1e3c72]">Jobs</span>
        </h2>
        <form onSubmit={handleAddJob}>
          {/* form email and job row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control   md:w-1/2 ">
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

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Job Title"
                  name="job"
                  className="input  form-border input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* from deadline and description row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  placeholder="Deadline"
                  name="deadline"
                  className="input  form-border input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Description About Job</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  className="input form-border  input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* from maxprice and minprice row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Maximum Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="Maximum Price"
                  name="maxprice"
                  className="input form-border  input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text"> Minimum Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  placeholder="Minimum Price"
                  name="minprice"
                  className="input form-border  input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* from category row */}

          <div className="mb-8 ">
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="">
                <select
                  name="category"
                  className="select select-bordered w-full"
                >
                  <option value="" disabled selected>
                    Select a category
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Graphics Design"> Graphics Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Job"
            className="btn btn-block btn-grad form-border"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJob;
