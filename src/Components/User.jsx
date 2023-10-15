import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const User = () => {
  const loadedUsers = useLoaderData();
  let [users, setUsers] = useState(loadedUsers);
  return (
    <div>
      <h1>Users {loadedUsers.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreatedAt</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user?.createdAt}</td>
                <td></td>
                <td>
                  <button className="btn btn-outline btn-error">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
