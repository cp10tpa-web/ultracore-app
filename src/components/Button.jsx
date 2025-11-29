// src/ui/Button.jsx

export default function Button({
  children,
  onClick,
  icon,
  size = "md",
  variant = "gold",
}) {
  return (
    <button
      onClick={onClick}
      className={`uc-btn uc-${variant} uc-${size}`}
    >
      {icon && <span className="uc-btn-icon">{icon}</span>}
      {children}
    </button>
  );
}


