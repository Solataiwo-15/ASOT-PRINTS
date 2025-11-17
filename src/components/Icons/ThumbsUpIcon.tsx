// src/components/Icons/ThumbsUpIcon.tsx
const ThumbsUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 7H13.7L14.6 2.8C14.8 1.8 14 0.8 13 0.8C12.6 0.8 12.2 1 12 1.2L7 6.2V18.2H19C19.8 18.2 20.6 17.6 20.8 16.8L22.8 10.8C23 10.2 22.6 9.2 21.8 9.2H19V8.2C19 7.6 19.6 7.2 20 7.2C20.4 7.2 20.8 7 21 7ZM5 18.2H1V8.2H5V18.2Z"
      fill="#00A3FF"
    />
  </svg>
);
export default ThumbsUpIcon;
