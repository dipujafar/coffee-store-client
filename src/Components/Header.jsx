import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center p-5 bg-gray-600 space-x-5">
      <NavLink className="font-medium text-xl" to="/">
        Home
      </NavLink>
      <NavLink className="font-medium text-xl" to="/user">
        User
      </NavLink>
      <NavLink className="font-medium text-xl" to="/singUp">
        SingUp
      </NavLink>
      <NavLink className="font-medium text-xl" to="/LogIn">
        Login
      </NavLink>
    </div>
  );
};

export default Header;
