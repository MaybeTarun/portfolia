import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const BaymaxWithCandy: React.FC<Props> = (props) => {
  return (
    <svg
      width="357"
      height="366"
      viewBox="0 0 357 366"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_i_451_12)">
        <path
          d="M25.8506 186.014C22.4163 284.486 224.192 319.276 357 365.5L357 186.014C276.547 134.134 222.516 55.1705 122.724 76.2408C53.8213 90.789 27.7464 131.655 25.8506 186.014Z"
          fill="#F9F9F9"
        />
      </g>
      <path d="M95.5 25.5V120" stroke="#2D2A32" strokeWidth="3" strokeLinecap="round" />
      <circle cx="96" cy="26" r="19" fill="#FF0000" fillOpacity="0.95" />
      <path
        d="M122.248 1.02832C120.01 20.8209 120.367 31.6659 121.25 50.9883L121.263 51.2646L120.986 51.25C100.074 50.1119 89.2342 50.2078 71.0146 51.25L70.7295 51.2656L70.751 50.9814C71.9727 34.6599 72.0785 24.2362 70.75 2.51562L70.7344 2.25195L70.998 2.25C91.841 2.08898 102.868 1.71447 121.987 0.75L122.281 0.735352L122.248 1.02832Z"
        fill="white"
        fillOpacity="0.50"
        stroke="white"
        strokeWidth="0.5"
      />
      <defs>
        <filter
          id="filter0_i_451_12"
          x="25.8086"
          y="68.7461"
          width="335.191"
          height="296.754"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="6" dy="-4" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_451_12" />
        </filter>
      </defs>
    </svg>
  );
};

export default BaymaxWithCandy;
