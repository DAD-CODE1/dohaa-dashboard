import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faSearch, faFilter, faCalendarDays, faSort } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Order() {
  const [timeframe, setTimeframe] = useState("last_week");

  const handleTimeframeChange = (e) => {
    setTimeframe(e.target.value);
  };

  return (
    <>
      <ul className="box-info" style={{ paddingLeft: "5px" }}>
        {/* بطاقة المبيعات */}
        {[...Array(3)].map((_, index) => (
          <li key={index}>
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
                    <option value="last_week">Last Week</option>
                    <option value="today">Today</option>
                    <option value="yesterday">Yesterday</option>
                    <option value="last_month">Last Month</option>
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
                    <span
                      className="text-success"
                      style={{ fontSize: "12px" }}
                    >
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
        ))}
      </ul>

      {/* جدول الإعلانات */}
      <div className="table-container py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5>Customer Add Ads</h5>
          <div className="d-flex align-items-center">
            <div className="input-group me-2" style={{ maxWidth: "200px" }}>
              <span className="input-group-text bg-transparent border-end-0">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search"
              />
            </div>
            <button className="btn btn-outline-dark me-2">
              <FontAwesomeIcon icon={faFilter} /> Filter
            </button>
            <button className="btn btn-outline-dark me-2">
              <FontAwesomeIcon icon={faCalendarDays} /> Filter
            </button>
          </div>
        </div>

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">
                Customer Name <FontAwesomeIcon icon={faSort} />
              </th>
              <th scope="col">
                Ads Date <FontAwesomeIcon icon={faSort} />
              </th>
              <th scope="col">
                Action <FontAwesomeIcon icon={faSort} />
              </th>
              <th scope="col">
                Status <FontAwesomeIcon icon={faSort} />
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(3)].map((_, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Customer Name</td>
                <td>12 Aug 2022 - 12:25 am</td>
                <td>
                  <select
                    className="form-select dropdown-select w-50"
                    style={{
                      border: "none",
                      backgroundColor: "#5E636614",
                      fontSize: "0.9rem",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      
                    }}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                  </select>
                </td>
                <td>
                  <button className="btn btn-danger">Accept</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <select
              className="form-select w-50 mx-3"
              style={{
                border: "none",
                backgroundColor: "#5E636614",
                fontSize: "0.9rem",
                padding: "5px 15px",
                borderRadius: "5px",
              }}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <p style={{ color: "#BEC0CA" }}>Items per page</p>
          </div>

          <nav>
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#" tabIndex="-1">
                  Previous
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Order;
