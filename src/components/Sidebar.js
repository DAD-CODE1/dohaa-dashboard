import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaCog, FaSignOutAlt, FaSmile } from "react-icons/fa";
import { BiStoreAlt, BiMessageRoundedDots, BiDashboard } from "react-icons/bi";

function Sidebar() {
  return (
    <section id="sidebar">
      <Link to="/" className="brand">
        <FaSmile />
        <span className="text-danger">OMAN Sale</span>
      </Link>
      <ul className="side-menu top">
        <li className="active">
          <Link to="/">
            <BiDashboard />
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <FaShoppingBag />
            <span className="text">Orders</span>
          </Link>
        </li>
        <li>
          <Link to="/ads">
            <BiStoreAlt />
            <span className="text">Ads</span>
          </Link>
        </li>
        <li>
          <Link to="/conversations">
            <BiMessageRoundedDots />
            <span className="text">Conversations</span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCog />
            <span className="text">Settings</span>
          </Link>
        </li>
      </ul>
      <ul className="side-menu" style={{ marginTop: "auto" }}>
        <li>
          <Link to="/logout" className="logout">
            <FaSignOutAlt />
            <span className="text">Logout</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;
