// src/ui/ModernButton.jsx

export default function ModernButton({ children, icon, onClick }) {
  return (
    <button onClick={onClick} style={styles.btn}>
      {icon && <span style={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}

const styles = {
  btn: {
    padding: "10px 18px",
    borderRadius: "12px",
    background:
      "linear-gradient(135deg, rgba(250,204,107,0.25), rgba(250,204,107,0.45))",
    border: "1px solid rgba(250,204,107,0.25)",
    backdropFilter: "blur(6px)",
    color: "#fff",
    fontWeight: "600",
    fontSize: "0.95rem",
    boxShadow: "0 0 12px rgba(250,204,107,0.25)",
    cursor: "pointer",
    transition: "0.2s",
  },

  icon: {
    marginRight: 6,
  },
};
