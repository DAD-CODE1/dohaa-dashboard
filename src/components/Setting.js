import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faLocationDot,
  faBuilding,
  faGlobe,
  faMap,
  faTrashCan,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import iconContainer from "../images/pro.jpg";
import { Link } from "react-router-dom";

function Setting() {
  const [activeTab, setActiveTab] = useState("account");

  const renderContent = () => {
    if (activeTab === "account") {
      return (
        <div>
          <div className="main-setting">
            <div className="head d-flex justify-content-between align-items-center my-5">
              <h3 style={{ fontSize: "20px", fontWeight: 500 }}>
                Account Settings
              </h3>
              <button className="btn btn-danger btn-lg">Update</button>
            </div>
            <div className="main-info-setting d-flex">
              {/* Form Section */}
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  width: "500px",
                }}
              >
                {/* First Name */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    width: "100%",
                  }}
                >
                  <label
                    htmlFor="first-name"
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#5E6366",
                    }}
                  >
                    First Name
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ color: "#ccc", fontSize: "18px" }}
                    />
                    <input
                      type="text"
                      id="first-name"
                      placeholder="Enter your first name"
                      style={{
                        border: "none",
                        outline: "none",
                        width: "100%",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    width: "100%",
                  }}
                >
                  <label
                    htmlFor="last-name"
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#5E6366",
                    }}
                  >
                    Last Name
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ color: "#ccc", fontSize: "18px" }}
                    />
                    <input
                      type="text"
                      id="last-name"
                      placeholder="Enter your last name"
                      style={{
                        border: "none",
                        outline: "none",
                        width: "100%",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    width: "100%",
                  }}
                >
                  <label
                    htmlFor="email"
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#5E6366",
                    }}
                  >
                    Email
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ color: "#ccc", fontSize: "18px" }}
                    />
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      style={{
                        border: "none",
                        outline: "none",
                        width: "100%",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    width: "100%",
                  }}
                >
                  <label
                    htmlFor="phone"
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#5E6366",
                    }}
                  >
                    Phone Number
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ color: "#ccc", fontSize: "18px" }}
                    />
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone number"
                      style={{
                        border: "none",
                        outline: "none",
                        width: "100%",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                </div>

                {/* Address */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    width: "100%",
                  }}
                >
                  <label
                    htmlFor="address"
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#5E6366",
                    }}
                  >
                    Address
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#ccc", fontSize: "18px" }}
                    />
                    <input
                      type="text"
                      id="address"
                      placeholder="Enter your address"
                      style={{
                        border: "none",
                        outline: "none",
                        width: "100%",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    width: "100%",
                  }}
                >
                  <label
                    htmlFor="company"
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#5E6366",
                    }}
                  >
                    Company Name
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faBuilding}
                      style={{ color: "#ccc", fontSize: "18px" }}
                    />
                    <input
                      type="text"
                      id="company"
                      placeholder="Enter your company name"
                      style={{
                        border: "none",
                        outline: "none",
                        width: "100%",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                </div>

                {/* Website URL */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    width: "100%",
                  }}
                >
                  <label
                    htmlFor="website"
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#5E6366",
                    }}
                  >
                    Website URL
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faGlobe}
                      style={{ color: "#ccc", fontSize: "18px" }}
                    />
                    <input
                      type="url"
                      id="website"
                      placeholder="Enter your website URL"
                      style={{
                        border: "none",
                        outline: "none",
                        width: "100%",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                </div>

                {/* City */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    width: "100%",
                  }}
                >
                  <label
                    htmlFor="city"
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "#5E6366",
                    }}
                  >
                    City
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faMap}
                      style={{ color: "#ccc", fontSize: "18px" }}
                    />
                    <input
                      type="text"
                      id="city"
                      placeholder="Enter your city"
                      style={{
                        border: "none",
                        outline: "none",
                        width: "100%",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                </div>
              </form>

              {/* Profile Image */}
              <div
                className="img-profile-container mx-5"
                style={{ position: "relative", flexShrink: 0 }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "150px",
                    height: "150px",
                    margin: "auto",
                  }}
                >
                  <img
                    src={iconContainer}
                    className="rounded"
                    alt="Profile"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      objectFit: "cover",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                  <button
                    className="delete-btn"
                    style={{
                      position: "absolute",
                      top: "20%",
                      left: "10px",
                      background: "#FFF2E2",
                      border: "none",
                      borderRadius: "50%",
                      padding: "7px",
                      cursor: "pointer",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      style={{ color: "black", fontSize: "14px" }}
                    />
                  </button>
                  <button
                    className="upload-btn"
                    style={{
                      position: "absolute",
                      top: "20%",
                      right: "10px",
                      background: "#FFF2E2",
                      border: "none",
                      borderRadius: "50%",
                      padding: "7px",
                      cursor: "pointer",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faUpload}
                      style={{ color: "black", fontSize: "14px" }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "subAdmin") {
      return (
        <div className="main-setting">
          <div className="head d-flex justify-content-between align-items-center my-5">
            <h3 style={{ fontSize: "20px", fontWeight: 500 }}>
              Account Settings
            </h3>
            <button className="btn btn-danger btn-lg">create sub admin</button>
          </div>
          <div className="table-container">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone number</th>
                  <th scope="col">Department</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={iconContainer}
                      alt="User profile" // أو استخدم alt="" إذا كانت الصورة تزيينية فقط
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  </td>
                  <td className="pt-3">Bakr</td>
                  <td className="pt-3">bakrtaha505@gmail.com</td>
                  <td className="pt-3">01045454545</td>
                  <td className="pt-3">Customer Service</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={iconContainer}
                      alt="User profile" // أو استخدم alt="" إذا كانت الصورة تزيينية فقط
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  </td>
                  <td className="pt-3">Ali</td>
                  <td className="pt-3">ali@example.com</td>
                  <td className="pt-3">01012345678</td>
                  <td className="pt-3">Sales</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={iconContainer}
                      alt="User profile" // أو استخدم alt="" إذا كانت الصورة تزيينية فقط
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  </td>
                  <td className="pt-3">Sara</td>
                  <td className="pt-3">sara@example.com</td>
                  <td className="pt-3">01098765432</td>
                  <td className="pt-3">Marketing</td>
                </tr>
                {/* Add more rows here */}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="setting my-5">
        <div
          className="card"
          style={{
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            className="navbar"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {/* Links with active class */}
            <Link
  to="#"
  onClick={() => setActiveTab("account")}
  style={{
    paddingBottom: "5px",
    transition: "color 0.3s ease",
    color: activeTab === "account" ? "black" : "#ABAFB1",
    fontSize: "16px",
    fontWeight: activeTab === "account" ? "bold" : "normal",
    position: "relative",
    textDecoration: "none",
  }}
  onMouseEnter={(e) => (e.target.style.color = "red")}
  onMouseLeave={(e) =>
    (e.target.style.color = activeTab === "account" ? "black" : "#ABAFB1")
  }
>
  Account
  {activeTab === "account" && (
    <span
      style={{
        content: "''",
        position: "absolute",
        bottom: "-2px",
        left: "0",
        width: "100%",
        height: "2px",
        backgroundColor: "red",
      }}
    />
  )}
</Link>


            <Link
              to="#"
              onClick={() => setActiveTab("subAdmin")}
              style={{
                paddingBottom: "5px",
                transition: "color 0.3s ease",
                color: activeTab === "subAdmin" ? "black" : "#ABAFB1",
                fontSize: "16px",
                fontWeight: activeTab === "subAdmin" ? "bold" : "normal",
                position: "relative",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.target.style.color = "red")}
              onMouseLeave={(e) =>
                (e.target.style.color = activeTab === "subAdmin" ? "black" : "#ABAFB1")
              }
            >
              Sub Admin
              {activeTab === "subAdmin" && (
                <span
                  style={{
                    content: "''",
                    position: "absolute",
                    bottom: "-2px",
                    left: "0",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "red",
                  }}
                />
              )}
            </Link>
          </div>

          <div className="main-setting">
            {/* Render content based on active tab */}
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
