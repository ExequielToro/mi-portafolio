import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* Texto personalizado P.T */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill="currentColor"
        fontSize="28"
        fontWeight="bold"
        fontFamily="'Fira Code', 'Consolas', 'Courier New', monospace"
        letterSpacing="1">
        P.T
      </text>

      {/* Hexágono que rodea el texto */}
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M 50,5
           L 11,27
           L 11,72
           L 50,95
           L 89,73
           L 89,28 Z"
      />
    </g>
  </svg>
);

export default IconLoader;
