import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/rooms",
      name: "Rooms",
    },
  ];
  return (
    <div className="navbar">
      {links.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `navbar__item ${isActive ? "active" : ""} `
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
