import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [ref, setRef] = useState<boolean>(false)

  const showNavBar = () => {
    setRef((prev) => !prev)
  };


  return (
    <header>
      <h3>
        Learning<span>Hub</span>
      </h3>
      <nav className={`${ref && "show-navbar"}`}>
        <button className="login">Login</button>
        <div>
        <NavLink
          to="/"
          className={({ isActive }): any => (isActive ? "activePath" : null)}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/service"
          className={({ isActive }): any => (isActive ? "activePath" : null)}
        >
          Service
        </NavLink>
        <NavLink
          to="/features"
          className={({ isActive }): any => (isActive ? "activePath" : null)}
        >
          Features
        </NavLink>
        <NavLink
          to="/product"
          className={({ isActive }): any => (isActive ? "activePath" : null)}
        >
          Product
        </NavLink>
        <NavLink
          to="/testmonial"
          className={({ isActive }): any => (isActive ? "activePath" : null)}
        >
          Testmonial
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }): any => (isActive ? "activePath" : null)}
        >
          FAQ
        </NavLink>
        </div>

        <button className="closeBtn" onClick={showNavBar}>
          &times;
        </button>
      </nav>
      <button className="menuBtn" onClick={showNavBar}>
        &#9776;
      </button>
    </header>
  );
};

export default Header;