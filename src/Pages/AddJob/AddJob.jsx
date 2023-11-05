// import Swal from 'sweetalert2'

const AddJob = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const price = form.price.value;
    const brand = form.brand.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const image = form.image.value;

    const newProduct = {
      name,
      price,
      brand,
      description,
      rating,
      category,
      image,
    };
    console.log(newProduct);

    // fetch('https://touchup-brand-server.vercel.app/products', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(newProduct)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);

    //         if(data.insertedId){
    //             Swal.fire({
    //                 title: 'Success!',
    //                 text: 'Product Added Successfully',
    //                 icon: 'success',
    //                 confirmButtonText: 'Ok'
    //               })
    //         }
    //     })
  };

  return (
    <div>
      <div className="bg-[#f1f3f5] rounded-xl md:p-24 p-4 my-20">
        <h2 className="text-3xl mb-10 text-center font-extrabold">
          Add Your <span className="text-[#1e3c72]">Cosmetics</span>
        </h2>
        <form onSubmit={handleAddProduct}>
          {/* form name and price row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control   md:w-1/2 ">
              <label className="label ">
                <span className="label-text ">Email</span>
              </label>
              <label className="input-group ">
                <input
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

          {/* from brand and details row */}
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

          {/* from rating and category row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  className="input form-border  input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Product Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Product Type"
                  name="category"
                  className="input form-border  input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* from image URL row */}

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
                  <option value="website">Web Development</option>
                  <option value="web design"> Graphics Design</option>
                  <option value="digital marketing">Digital Marketing</option>
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
