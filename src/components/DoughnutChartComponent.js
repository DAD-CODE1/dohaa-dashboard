import React, { useState } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

const DashboardChart = () => {
  const [timeframe, setTimeframe] = useState('last_week');

  const handleTimeframeChange = (e) => {
    setTimeframe(e.target.value);
  };

  const options = {
    animationEnabled: true,
    theme: "light2",
    data: [{
      type: "doughnut",
      startAngle: 90,
      dataPoints: [
        { y: 519960, name: "total online", color: "#ED573B" },
        { y: 363040, name: "total views", color: "#97A5EB" }
      ]
    }]
  };

  return (
    
      <div className="card views py-2 px-3 shadow" style={{ height: '85%' }}>
        <div className="d-flex flex-column justify-content-between align-items-start w-100">
          <div className="d-flex justify-content-between align-items-center w-100 mb-3">
            <div className="d-flex align-items-center">
              <h3 style={{ fontSize: '16px' }}>Views</h3>
            </div>
            <form>
              <select
                name="timeframe"
                className="rounded"
                style={{
                  border: 'none',
                  backgroundColor: 'white',
                  padding: '5px 10px',
                  color: '#BEC0CA'
                }}
                value={timeframe}
                onChange={handleTimeframeChange}
              >
                <option value="last_week" style={{ color: '#BEC0CA' }}>This Week</option>
                <option value="today" style={{ color: '#BEC0CA' }}>Today</option>
                <option value="yesterday" style={{ color: '#BEC0CA' }}>Yesterday</option>
                <option value="last_month" style={{ color: '#BEC0CA' }}>Last Month</option>
              </select>
            </form>
          </div>

          <div className="chart-container" style={{ width: '100%', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#ED573B',
                    borderRadius: '50%',
                    display: 'inline-block'
                  }}></span>
                <span style={{ fontSize: '11px', color: '#A6A8B1' }}>Total Views</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#97A5EB',
                    borderRadius: '50%',
                    display: 'inline-block'
                  }}></span>
                <span style={{ fontSize: '11px', color: '#A6A8B1' }}>Total Online</span>
              </span>
            </div>

            <div className="d-flex justify-content-center" style={{ width: '100%' }}>
              <div id="chartContainer" style={{ height: '50%', width: '50%' }}>
                <CanvasJSChart options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default DashboardChart;
