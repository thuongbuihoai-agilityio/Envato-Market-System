// Types
import { TColor } from '@interfaces/index';

export const Arrow = ({ color, rotate }: TColor) => (
  <svg
    stroke={color}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: `rotate(${rotate})`,
    }}
  >
    <path
      d="M7 10L12 14L17 10"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);
