import { useLoaderData } from "react-router-dom";


const Update = () => {

    const job = useLoaderData()
    console.log(job)

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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
          
          <button type="submit" className="btn btn-block btn-grad form-border">Add Job</button>
         

   
        {/* <Link to='/myjob'>
        <input
            type="submit"
            value="Add Job"
            className="btn btn-block btn-grad form-border"
          />
        </Link> */}
      

        </form>
      </div>
    </div>
    );
};

export default Update;

