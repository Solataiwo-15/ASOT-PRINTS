// src/components/Icons/PlayCircleIcon.tsx
const PlayCircleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="40" cy="40" r="40" fill="white" />
    <path d="M51 40L34.5 50.3923L34.5 29.6077L51 40Z" fill="#00A3FF" />
  </svg>
);
export default PlayCircleIcon;
