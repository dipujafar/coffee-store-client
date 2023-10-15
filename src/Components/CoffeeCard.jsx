import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, handleDelete }) => {
  const { _id, name, quantity, supplier, test, category, details, photo } =
    coffee;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="coffee image" />
      </figure>
      <div className="w-full flex justify-between  p-4">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Test: {test}</p>
          <p>Category: {category}</p>
          <p>{details}</p>
        </div>
        <div>
          <div className="btn-group btn-group-vertical space-y-3">
            <button className="btn  btn-outline btn-info">View</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn  btn-outline btn-info">Edit</button>
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              className="btn  btn-outline btn-error"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
