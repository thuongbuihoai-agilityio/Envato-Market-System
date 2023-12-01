import { TColor } from '@interfaces/color';

export const Arrow = ({ colorFill }: TColor) => (
  <svg
    stroke={colorFill}
    width="24"
    height="24"
    viewBox="0 0 24 24"
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
