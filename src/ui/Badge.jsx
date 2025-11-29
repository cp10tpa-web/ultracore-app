export default function Badge({ children, type = "gold" }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 10px",
    borderRadius: "999px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    margin: "4px",
    border: "1px solid rgba(250,204,107,0.4)",
    background: "rgba(250,204,107,0.12)",
    color: "#facc6b",
    boxShadow: "0 0 6px rgba(250,204,107,0.3)",
  };

  const styles = {
    gold: { ...base },

    purple: {
      ...base,
      background: "rgba(168,85,247,0.12)",
      border: "1px solid rgba(168,85,247,0.4)",
      color: "#a855f7",
      boxShadow: "0 0 6px rgba(168,85,247,0.3)",
    },

    blue: {
      ...base,
      background: "rgba(56,189,248,0.12)",
      border: "1px solid rgba(56,189,248,0.4)",
      color: "#38bdf8",
      boxShadow: "0 0 6px rgba(56,189,248,0.3)",
    },
  };

  return <span style={styles[type]}>{children}</span>;
}
