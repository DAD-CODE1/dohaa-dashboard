import React, { useState } from "react";
import ChartComponent from "./ChartComponent"; // افتراضياً، استيراد مكون الرسم البياني

const SalesSection = () => {
  const [timeframe, setTimeframe] = useState("last_week");

  const handleTimeframeChange = (e) => {
    setTimeframe(e.target.value);
  };

  return (
    <ul className="box-info " style={{ paddingLeft: "5px" }}>
      <li key="summary-section">
        <div className="d-flex flex-column justify-content-between align-items-start w-100">
          <div className="d-flex justify-content-between align-items-center w-100 mb-3 flex-nowrap">
            {/* الـ div في اليسار */}
            <div className="d-flex align-items-center">
              <h3 className="text-dark mb-0">Summary</h3>
              <p
                className="text-danger py-1 px-4 rounded ms-3 mt-1 mb-0"
                style={{ background: "#D5323714" }}
              >
                Sales
              </p>
            </div>

            {/* الـ form في اليمين */}
            <form>
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

          {/* Add chart based on timeframe */}
          <ChartComponent timeframe={timeframe} />
        </div>
      </li>
    </ul>
  );
};

export default SalesSection;
