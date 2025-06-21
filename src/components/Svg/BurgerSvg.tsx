export const BurgerSvg = ({ fillColor = "none" }: { fillColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill={fillColor}
  >
    <g id="Hamburger menu">
      <path
        id="Vector"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5H32V7H0V5ZM0 15H32V17H0V15ZM16 25H0V27H16V25Z"
        fill="#262626"
      />
    </g>
  </svg>
);
