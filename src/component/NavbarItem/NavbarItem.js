import React from "react";
import "./navbaritem.css";

function NavbarItem({ name, onClick }) {
  return (
    <div className="nav-item" onClick={onClick && onClick}>
      {name}
    </div>
  );
}

export default NavbarItem;
