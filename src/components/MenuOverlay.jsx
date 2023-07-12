import { useState } from "react";
import { Link } from "react-router-dom";

import "../css/style.css";

const MenuOverlay = () => {
  const [open, setOpen] = useState(false);

    const isOpen = () => {
        setOpen(true)

    }

    const isClose = () => {
        setOpen(false)
    }

  return (
    <>
      <header className="header">
        <div onClick={isOpen} className="menu">
          <box-icon
            name="menu-alt-right"
            color="#ffffff"
            size="32px"
          ></box-icon>
        </div>
      </header>

      {open && (
        <div className="menu_container">
          <div onClick={isClose} className="btn_close">
            <box-icon name="x" color="#ffffff" size="42px"></box-icon>
          </div>
          <Link className="link_menu" to="/collaborations">
            {" "}
            Collaborations{" "}
          </Link>
          <Link className="link_menu" to="/aboutus">
            {" "}
            About Us{" "}
          </Link>
          <Link className="link_menu" to="/contact">
            {" "}
            Contact{" "}
          </Link>
        </div>
      )}
    </>
  );
};

export default MenuOverlay;
