// Types
import { TIcon } from '@interfaces/index';

export const Arrow = ({ color, width = 24, height = 24 }: TIcon) => (
  <svg
    stroke={color}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 10L12 14L17 10"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
