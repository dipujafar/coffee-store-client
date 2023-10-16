import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/coffeeCard";
import Swal from "sweetalert2";
import { useState } from "react";

function App() {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-37qhzgnfg-jafars-projects.vercel.app/coffee/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
            const remaining = coffees.filter((coffee) => coffee._id !== id);
            setCoffees(remaining);
          });
      }
    });
  };
  return (
    <div className="m-2 md:m-10">
      <h1 className="text-5xl text-center mb-10 text-purple-500">
        All hot hot cold cold coffee: {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-5">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            handleDelete={handleDelete}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
