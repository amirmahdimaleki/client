import { NavLink } from "react-router-dom";
import '../App.css';
const Nav = () => {
  let activeStyle = {
    color: "#000",
    border: "3px solid white",
    backgroundColor:"#fff",
    borderRadius:"7px",
    textDecoration:"none"
  };
  let notActiveStyle = {
    color: "#fff",
    textDecoration:"none"
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/history"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            History
          </NavLink>
        </li>
        <li>
          <NavLink
              to="/members"
              style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
              >
                Members
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
