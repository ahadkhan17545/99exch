import React from "react";
import "../Loader.css";

const Loader = () => {
  return (
    <div className="preloader" id="custom-loader" style={{ display: "none" }}>
      <div className="loader-container">
        <svg className="progress-ring" width="200" height="200">
          <circle className="progress-ring-bg" cx="100" cy="100" r="90" />
          <circle className="progress-ring-circle" cx="100" cy="100" r="90" />
        </svg>
        <div className="loader-content">
          <div className="loading-stage">
            <div className="stage-current">Loading</div>
            <div className="stage-next">Ready</div>
          </div>
          <div className="percentage">0</div>
        </div>
      </div>
      <div className="loader-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
};

export default Loader;
