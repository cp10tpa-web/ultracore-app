export default function Input({
  value,
  onChange,
  placeholder = "",
  type = "text",
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      placeholder={placeholder}
      style={styles.input}
    />
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "12px 14px",
    margin: "6px 0",
    borderRadius: "12px",
    border: "1px solid rgba(250,204,107,0.35)",
    background: "rgba(255,255,255,0.04)",
    color: "#fff",
    outline: "none",
    fontSize: "0.95rem",
    backdropFilter: "blur(8px)",
    transition: "0.25s ease",
  },
};
