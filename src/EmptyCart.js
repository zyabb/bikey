import React from 'react';

const EmptyCart = () => {
  return (
    <div>
      <svg
        width="165"
        height="84"
        viewBox="0 0 165 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="34" cy="46" r="30" fill="#F4D3D3" />
          <circle cx="34" cy="46" r="27.5" stroke="black" strokeWidth="5" />
        </g>
        <g filter="url(#filter1_d)">
          <circle cx="131" cy="46" r="30" fill="#F4D3D3" />
          <circle cx="131" cy="46" r="27.5" stroke="black" strokeWidth="5" />
        </g>
        <line
          x1="32.5"
          y1="49.4042"
          x2="77.5"
          y2="49.4042"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="32.3861"
          y1="49.38"
          x2="58.197"
          y2="12.5182"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="103.5"
          y1="12.4042"
          x2="58.5001"
          y2="12.4042"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="78.3862"
          y1="48.6673"
          x2="109.933"
          y2="3.61394"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="107.415"
          y1="7.8193"
          x2="131.415"
          y2="49.3885"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="76.6565"
          y1="48.8507"
          x2="56.9089"
          y2="8.41513"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="50.5"
          y1="6.5"
          x2="65.5"
          y2="6.5"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <line
          x1="97.5"
          y1="2.5"
          x2="112.5"
          y2="2.5"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="16"
            width="68"
            height="68"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            x="97"
            y="16"
            width="68"
            height="68"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <h2>is empty</h2>
    </div>
  );
};

export default EmptyCart;
