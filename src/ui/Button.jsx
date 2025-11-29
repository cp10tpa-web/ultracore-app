// src/ui/Button.jsx
export default function Button({
  children,
  onClick,
  icon,
  size = "md",
  variant = "primary",
  style = {},
}) {
  const classes = {
    base: {
      padding: size === "sm" ? "10px 16px" : "12px 20px",
      background:
        variant === "primary"
          ? "linear-gradient(135deg, #facc6b 0%, #d9a74d 100%)"
          : "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: "14px",
      color: "#fff",
      fontSize: size === "sm" ? "0.9rem" : "1rem",
      fontWeight: 600,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      justifyContent: "center",
      boxShadow:
        variant === "primary"
          ? "0 0 12px rgba(250,204,107,0.4)"
          : "0 0 10px rgba(255,255,255,0.05)",
      backdropFilter: "blur(6px)",
      transition: "0.2s",
      ...style,
    },
    hover: {
      transform: "scale(1.04)",
      boxShadow:
        variant === "primary"
          ? "0 0 18px rgba(250,204,107,0.6)"
          : "0 0 14px rgba(255,255,255,0.12)",
    },
  };

  return (
    <button
      onClick={onClick}
      style={classes.base}
      onMouseEnter={(e) =>
        Object.assign(e.target.style, classes.hover)
      }
      onMouseLeave={(e) =>
        Object.assign(e.target.style, classes.base)
      }
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
