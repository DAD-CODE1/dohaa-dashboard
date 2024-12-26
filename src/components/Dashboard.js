import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faFolderClosed,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import DoughnutChartComponent from "./DoughnutChartComponent";
import SalesSection from "./SalesSection";
import RecentOrders from "./RecentOrders";
const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("last_week");

  const handleTimeframeChange = (e) => {
    setTimeframe(e.target.value);
  };

  return (
    <>
      <ul className="box-info" style={{ paddingLeft: "5px" }}>
        <li className="shadow">
          <div className="d-flex flex-column justify-content-between align-items-start w-100">
            <div className="d-flex justify-content-between align-items-center w-100 mb-3">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faChartPie}
                  className="bg-danger rounded p-2 text-white me-3"
                />
              </div>
              <form>
                <select
                  name="timeframe"
                  className="rounded"
                  style={{
                    border: "none",
                    backgroundColor: "white",
                    padding: "5px 10px",
                    color: "#BEC0CA",
                  }}
                  value={timeframe}
                  onChange={handleTimeframeChange}
                >
                  <option value="last_week" style={{ color: "#BEC0CA" }}>
                    Last Week
                  </option>
                  <option value="today" style={{ color: "#BEC0CA" }}>
                    Today
                  </option>
                  <option value="yesterday" style={{ color: "#BEC0CA" }}>
                    Yesterday
                  </option>
                  <option value="last_month" style={{ color: "#BEC0CA" }}>
                    Last Month
                  </option>
                </select>
              </form>
            </div>
            <div className="d-flex justify-content-between w-100 px-5 my-3">
              <div className="d-flex flex-column align-items-start w-45">
                <div
                  className="mb-1"
                  style={{ color: "#8B8D97", fontSize: "14px" }}
                >
                  Sales
                </div>
                <div
                  className="text-muted text-dark"
                  style={{ fontSize: "20px" }}
                >
                  ₦0.00{" "}
                  <span className="text-success" style={{ fontSize: "12px" }}>
                    +0.00%
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column align-items-start w-45">
                <div
                  className="mb-1"
                  style={{ color: "#8B8D97", fontSize: "14px" }}
                >
                  Volume
                </div>
                <div
                  className="text-muted text-dark"
                  style={{ fontSize: "20px" }}
                >
                  0
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="shadow">
          <div className="d-flex flex-column justify-content-between align-items-start w-100">
            <div className="d-flex justify-content-between align-items-center w-100 mb-3">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faChartPie}
                  className="bg-danger rounded p-2 text-white me-3"
                />
              </div>
              <form>
                <select
                  name="timeframe"
                  className="rounded"
                  style={{
                    border: "none",
                    backgroundColor: "white",
                    padding: "5px 10px",
                    color: "#BEC0CA",
                  }}
                  value={timeframe}
                  onChange={handleTimeframeChange}
                >
                  <option value="last_week" style={{ color: "#BEC0CA" }}>
                    Last Week
                  </option>
                  <option value="today" style={{ color: "#BEC0CA" }}>
                    Today
                  </option>
                  <option value="yesterday" style={{ color: "#BEC0CA" }}>
                    Yesterday
                  </option>
                  <option value="last_month" style={{ color: "#BEC0CA" }}>
                    Last Month
                  </option>
                </select>
              </form>
            </div>
            <div className="d-flex justify-content-between w-100 px-5 my-3">
              <div className="d-flex flex-column align-items-start w-45">
                <div
                  className="mb-1"
                  style={{ color: "#8B8D97", fontSize: "14px" }}
                >
                  Sales
                </div>
                <div
                  className="text-muted text-dark"
                  style={{ fontSize: "20px" }}
                >
                  ₦0.00{" "}
                  <span className="text-success" style={{ fontSize: "12px" }}>
                    +0.00%
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column align-items-start w-45">
                <div
                  className="mb-1"
                  style={{ color: "#8B8D97", fontSize: "14px" }}
                >
                  Volume
                </div>
                <div
                  className="text-muted text-dark"
                  style={{ fontSize: "20px" }}
                >
                  0
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="shadow">
          <div className="d-flex flex-column justify-content-between align-items-start w-100">
            <div className="d-flex justify-content-between align-items-center w-100 mb-3">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faChartPie}
                  className="bg-danger rounded p-2 text-white me-3"
                />
              </div>
              <form>
                <select
                  name="timeframe"
                  className="rounded"
                  style={{
                    border: "none",
                    backgroundColor: "white",
                    padding: "5px 10px",
                    color: "#BEC0CA",
                  }}
                  value={timeframe}
                  onChange={handleTimeframeChange}
                >
                  <option value="last_week" style={{ color: "#BEC0CA" }}>
                    Last Week
                  </option>
                  <option value="today" style={{ color: "#BEC0CA" }}>
                    Today
                  </option>
                  <option value="yesterday" style={{ color: "#BEC0CA" }}>
                    Yesterday
                  </option>
                  <option value="last_month" style={{ color: "#BEC0CA" }}>
                    Last Month
                  </option>
                </select>
              </form>
            </div>
            <div className="d-flex justify-content-between w-100 px-5 my-3">
              <div className="d-flex flex-column align-items-start w-45">
                <div
                  className="mb-1"
                  style={{ color: "#8B8D97", fontSize: "14px" }}
                >
                  Sales
                </div>
                <div
                  className="text-muted text-dark"
                  style={{ fontSize: "20px" }}
                >
                  ₦0.00{" "}
                  <span className="text-success" style={{ fontSize: "12px" }}>
                    +0.00%
                  </span>
                </div>
              </div>
              <div className="d-flex flex-column align-items-start w-45">
                <div
                  className="mb-1"
                  style={{ color: "#8B8D97", fontSize: "14px" }}
                >
                  Volume
                </div>
                <div
                  className="text-muted text-dark"
                  style={{ fontSize: "20px" }}
                >
                  0
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className="main-component p-5">
        <div className="row">
          {/* Left Side */}
          <div className="col-md-8 my-5 left-side">
            <div className="row">
             
              <div className="col-md-6 mt-3 chart ">
                <DoughnutChartComponent className="w-100" />
              </div>
             

             
              <div className="col-md-6 mt-3 ">
                {/* Card 1 */}
                <div className="card bg-danger p-3 rounded">
                  <div className="d-flex flex-column justify-content-between align-items-start w-100">
                    <div className="d-flex justify-content-between align-items-center w-100 mb-3">
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faFolderClosed}
                          style={{ background: "#ffffffbd" }}
                          className="rounded p-2 text-danger me-3"
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-between w-100 px-5 my-3">
                      <div className="d-flex flex-column align-items-start w-45">
                        <div
                          className="my-3"
                          style={{ color: "white", fontSize: "14px" }}
                        >
                          All Orders
                        </div>
                        <div
                          className="text-white"
                          style={{ fontSize: "20px" }}
                        >
                          0{" "}
                          <span
                            className="text-dark mx-1"
                            style={{ fontSize: "12px" }}
                          >
                            +0.00%
                          </span>
                        </div>
                      </div>

                      <div className="d-flex flex-column align-items-start w-45">
                        <div
                          className="my-3"
                          style={{ color: "white", fontSize: "14px" }}
                        >
                          Completed
                        </div>
                        <div
                          className="text-white"
                          style={{ fontSize: "20px" }}
                        >
                          0{" "}
                          <span
                            className="text-dark mx-1"
                            style={{ fontSize: "12px" }}
                          >
                            +0.00%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="card my-5 p-3 rounded">
                  <div className="d-flex flex-column justify-content-between align-items-start w-100">
                    <div className="d-flex justify-content-between align-items-center w-100 mb-3">
                      <div className="d-flex align-items-center">
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          style={{ background: "#D532370D" }}
                          className="rounded p-2 text-dark me-3"
                        />
                      </div>
                      <form action="/action_page.php">
                        <select
                          name="timeframe"
                          className="rounded"
                          id="cars"
                          style={{
                            border: "none",
                            backgroundColor: "white",
                            padding: "5px 10px",
                            color: "#BEC0CA",
                          }}
                        >
                          <option
                            value="last_week"
                            style={{ color: "#BEC0CA" }}
                          >
                            Last Week
                          </option>
                          <option value="today" style={{ color: "#BEC0CA" }}>
                            Today
                          </option>
                          <option
                            value="yesterday"
                            style={{ color: "#BEC0CA" }}
                          >
                            Yesterday
                          </option>
                          <option
                            value="last_month"
                            style={{ color: "#BEC0CA" }}
                          >
                            Last Month
                          </option>
                        </select>
                      </form>
                    </div>

                    <div className="d-flex justify-content-between w-100 px-5 my-3">
                      <div className="d-flex flex-column align-items-start w-45">
                        <div
                          className="my-3 text-danger"
                          style={{ fontSize: "14px" }}
                        >
                          Total
                        </div>
                        <div className="text-dark" style={{ fontSize: "20px" }}>
                          0{" "}
                          <span
                            className="text-dark mx-1"
                            style={{ fontSize: "12px" }}
                          >
                            +0.00%
                          </span>
                        </div>
                      </div>

                      <div className="d-flex flex-column align-items-start w-45">
                        <div
                          className="my-3"
                          style={{ color: "#8B8D97", fontSize: "14px" }}
                        >
                          Customers
                        </div>
                        <div className="text-dark" style={{ fontSize: "20px" }}>
                          0{" "}
                          <span
                            className="text-success mx-1"
                            style={{ fontSize: "12px" }}
                          >
                            +0.00%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>{/* roooow */}

            {/* Summary Card */}
            <div className=" summary">
              <SalesSection/>
            </div>
          </div>{/* up*/}

          {/* Right Side */}
          <div className="col-md-4 my-5">
          <RecentOrders/>
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;
