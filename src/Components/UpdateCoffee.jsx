import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updateCoffee = useLoaderData();
  const { _id, name, quantity, supplier, test, category, details, photo } =
    updateCoffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(
      `https://coffee-store-server-37qhzgnfg-jafars-projects.vercel.app/coffee/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Successfully!",
            text: "You update the coffee",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-2 md:p-24 space-y-8">
      <h1 className="text-3xl font-extrabold text-center"> Add a Coffees</h1>
      <form onSubmit={handleUpdateCoffee} className=" space-y-5">
        {/* form row name and  quantity */}
        <div className="md:flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Coffee Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={name}
                placeholder="Coffee Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Available Quantity:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={quantity}
                placeholder="Available Quantity"
                name="quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row supplier and  test*/}
        <div className="md:flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Supplier Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={supplier}
                placeholder="Supplier Name"
                name="supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Test:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={test}
                placeholder="Test"
                name="test"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row Category and  Details*/}
        <div className="md:flex gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={category}
                placeholder="Category"
                name="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Details:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={details}
                placeholder="Details"
                name="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row Category and  Details*/}
        <div className="gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={photo}
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
