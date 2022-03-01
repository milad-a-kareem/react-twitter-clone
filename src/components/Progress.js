import React from "react";

function Progress({ percent }) {
  const iPercent = percent;
  if (percent > 1) {
    percent = 1;
  }

  let color = "#1D9BF0";
  if (1 - iPercent < 0.0714285714285714285714285714) {
    color = "rgb(255, 212, 0)";
  }
  if (1 - iPercent < 0) {
    color = "rgb(244, 33, 46)";
  }
  const calculation = (1 - percent) * 56.5487;
  return (
    <svg
      height="100%"
      viewBox="0 0 20 20"
      width="100%"
      style={{ overflow: "visible" }}
    >
      <circle
        cx="50%"
        cy="50%"
        fill="none"
        strokeWidth="2"
        r="9"
        stroke="#EFF3F4"
      ></circle>
      <circle
        cx="50%"
        cy="50%"
        fill="none"
        strokeWidth="2"
        r="9"
        stroke={color}
        strokeLinecap="round"
        style={{ strokeDashoffset: calculation, strokeDasharray: 56.5487 }}
      ></circle>
    </svg>
  );
}

export default Progress;
