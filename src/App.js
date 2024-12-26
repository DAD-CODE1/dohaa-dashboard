import React, { createContext, useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  FaSmile,
  FaShoppingBag,
  FaStoreAlt,
  FaCog,
  FaSignOutAlt,
  FaBell,
  FaBars,
} from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import profileImage from "./images/people.png";
import "./components/App.css"; // افترض أن ملف التنسيق في هذا المسار

import Dashboard from "./components/Dashboard";
import Order from "./components/Order";
import Ads from "./components/Ads";
import Convestion from "./components/Convestion";
import Setting from "./components/Setting";

// إنشاء السياق
export const AppContext = createContext();

const App = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  // التعامل مع تغيير حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarHidden(window.innerWidth < 576);
    };

    handleResize(); // تشغيل عند تحميل الصفحة
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = (menu) => setActiveMenu(menu);

  return (
    <div>
      <style>
        {`
		
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

:root {
  --poppins: "Poppins", sans-serif;
  --lato: "Lato", sans-serif;

  --light: white;
  --blue: #dc3545;
  --light-blue: #cfe8ff;
  --grey: #f4f5fa;
  --dark-grey: #aaaaaa;
  --dark: #342e37;
  --red: #db504a;
  --yellow: #ffce26;
  --light-yellow: #fff2c6;
  --orange: #fd7238;
  --light-orange: #ffe0d3;
}

html {
  overflow-x: hidden;
}

body.dark {
  --light: #0c0c1e;
  --grey: #060714;
  --dark: #fbfbfb;
}

body {
  background: var(--grey);
  overflow-x: hidden;
}
  
/* SIDEBAR */
#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background: var(--light);
  z-index: 2000;
  font-family: var(--lato);
  transition: 0.3s ease;
  overflow-x: hidden;
  scrollbar-width: none;
}
#sidebar::--webkit-scrollbar {
  display: none;
}
#sidebar.hide {
  width: 60px;
}
#sidebar .brand {
  font-size: 24px;
  font-weight: 700;
  height: 56px;
  display: flex;
  align-items: center;
  color: var(--blue);
  position: sticky;
  top: 0;
  left: 0;
  background: var(--light);
  z-index: 500;
  padding-bottom: 20px;
  box-sizing: content-box;
}
#sidebar .brand .bx {
  min-width: 60px;
  display: flex;
  justify-content: center;
}
#sidebar .side-menu {
  width: 100%;
  margin-top: 48px;
}
#sidebar .side-menu li {
  height: 48px;
  background: transparent;
  margin-left: 6px;
  border-radius: 48px 0 0 48px;
  padding: 4px;
}
#sidebar .side-menu li.active {
  background: var(--grey);
  position: relative;
}
#sidebar .side-menu li.active::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: -40px;
  right: 0;
  box-shadow: 20px 20px 0 var(--grey);
  z-index: -1;
}
#sidebar .side-menu li.active::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  bottom: -40px;
  right: 0;
  box-shadow: 20px -20px 0 var(--grey);
  z-index: -1;
}
#sidebar .side-menu li a {
  width: 100%;
  height: 100%;
  background: var(--light);
  display: flex;
  align-items: center;
  border-radius: 48px;
  font-size: 16px;
  color: var(--dark);
  white-space: nowrap;
  overflow-x: hidden;
}
#sidebar .side-menu.top li.active a {
  color: var(--blue);
}
#sidebar.hide .side-menu li a {
  width: calc(48px - (4px * 2));
  transition: width 0.3s ease;
}
#sidebar .side-menu li a.logout {
  color: var(--red);
}
#sidebar .side-menu.top li a:hover {
  color: var(--blue);
}
#sidebar .side-menu li a .goal {
  min-width: calc(60px - ((4px + 6px) * 2));
  display: flex;
  justify-content: center;
}
/* SIDEBAR */

/* CONTENT */
#content {
  position: relative;
  width: calc(100% - 280px);
  left: 280px;
  transition: 0.3s ease;
}
#sidebar.hide ~ #content {
  width: calc(100% - 60px);
  left: 60px;
}

/* NAVBAR */
#content nav {
  height: 56px;
  background: var(--light);
  padding: 0 24px;
  display: flex;
  align-items: center;
  grid-gap: 24px;
  font-family: var(--lato);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
}
#content nav::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: -40px;
  left: 0;
  border-radius: 50%;
  box-shadow: -20px -20px 0 var(--light);
}
#content nav a {
  color: var(--dark);
}
#content nav .bx.bx-menu {
  cursor: pointer;
  color: var(--dark);
}
#content nav .nav-link {
  font-size: 16px;
  transition: 0.3s ease;
}
#content nav .nav-link:hover {
  color: var(--blue);
}
#content nav .head-title {
  margin-right: auto;
}
#content nav form .form-input {
  display: flex;
  align-items: center;
  height: 36px;
}
#content nav form .form-input input {
  flex-grow: 1;
  padding: 0 16px;
  height: 100%;
  border: none;
  background: var(--grey);
  border-radius: 36px 0 0 36px;
  outline: none;
  width: 100%;
  color: var(--dark);
}
#content nav form .form-input button {
  width: 36px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--blue);
  color: var(--light);
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 0 36px 36px 0;
  cursor: pointer;
}
#content nav .notification {
  font-size: 20px;
  position: relative;
}
#content nav .notification .num {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--light);
  background: var(--red);
  color: var(--light);
  font-weight: 700;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#content nav .profile img {
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
}
#content nav .switch-mode {
  display: block;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  background: var(--grey);
  cursor: pointer;
  position: relative;
}
#content nav .switch-mode::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  bottom: 2px;
  width: calc(25px - 4px);
  background: var(--blue);
  border-radius: 50%;
  transition: all 0.3s ease;
}
#content nav #switch-mode:checked + .switch-mode::before {
  left: calc(100% - (25px - 4px) - 2px);
}
/* NAVBAR */
ul {
  padding: 0 !important;
  margin: 0 !important;
  list-style: none !important;
  padding-left: 5px !important;
}
ul.box-info li {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
}
ul.box-info li .d-flex {
  width: 100%;
}
.card {
  overflow: hidden; 
  max-width: 100%; 
  word-wrap: break-word; 
}

#chartContainer + div {
  display: none !important;
}

.chart-container {
  width: 80%;
  margin: 20px auto;
}

@media (max-width: 768px) {
  h3 {
    font-size: 12px; 
  }

  p {
    font-size: 10px; 
  }
}
/* MAIN */
#content main {
  width: 100%;
  padding: 36px 24px;
  font-family: var(--poppins);
  max-height: calc(100vh - 56px);
  overflow-y: auto;
}
        `}
      </style>
      {/* Sidebar Section */}
      <section id="sidebar" className={isSidebarHidden ? "hide" : ""}>
        <Link to="/" className="brand">
          <FaSmile className="goal" />
          <span className="text-danger">OMAN Sale</span>
        </Link>
        <ul className="side-menu top">
          <li className={activeMenu === "dashboard" ? "active" : ""}>
            <Link to="/" onClick={() => handleMenuClick("dashboard")}>
              <FaBars className="goal" />
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li className={activeMenu === "orders" ? "active" : ""}>
            <Link to="/Orders" onClick={() => handleMenuClick("orders")}>
              <FaShoppingBag className="goal" />
              <span className="text">Orders</span>
            </Link>
          </li>
          <li className={activeMenu === "ads" ? "active" : ""}>
            <Link to="/Ads" onClick={() => handleMenuClick("ads")}>
              <FaStoreAlt className="goal" />
              <span className="text">Ads</span>
            </Link>
          </li>
          <li className={activeMenu === "conversations" ? "active" : ""}>
            <Link
              to="/Convestion"
              onClick={() => handleMenuClick("conversations")}
            >
              <BsChatDots className="goal" />
              <span className="text">Conversations</span>
            </Link>
          </li>
          <li className={activeMenu === "settings" ? "active" : ""}>
            <Link to="/Setting" onClick={() => handleMenuClick("settings")}>
              <FaCog className="goal" />
              <span className="text">Settings</span>
            </Link>
          </li>
        </ul>
        <ul className="side-menu" style={{ marginTop: "auto" }}>
          <li>
            <Link to="/logout" className="logout">
              <FaSignOutAlt className="goal" />
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>

      {/* Content Section */}
      <section id="content">
        {/* Navbar */}
        <nav>
          <FaBars
            className="bx bx-menu"
            onClick={() => setIsSidebarHidden(!isSidebarHidden)}
          />
          <h1 style={{ marginRight: "auto" }}>Dashboard</h1>
          <Link to="/notifications" className="notification">
            <FaBell />
            <span className="num">8</span>
          </Link>
          <Link to="/profile" className="profile me-5">
            <img src={profileImage} alt="Profile" />
          </Link>
        </nav>

        {/* Main */}
        <main>
          <AppContext.Provider value={{ activeMenu, setActiveMenu }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Orders" element={<Order />} />
              <Route path="/Ads" element={<Ads />} />
              <Route path="/Convestion" element={<Convestion />} />
              <Route path="/Setting" element={<Setting />} />
              {/* أضف المزيد من المسارات هنا حسب الحاجة */}
            </Routes>
          </AppContext.Provider>
        </main>
      </section>
    </div>
  );
};

export default App;
