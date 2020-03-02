import React from "react";

const TwoRectanglesLine = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <title>Two Rectangles</title>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <path d="M6 6h0M6 18h0" />
  </svg>
);

export default TwoRectanglesLine;
