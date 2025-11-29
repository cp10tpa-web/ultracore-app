export default function Card({ children }) {
  return (
    <div style={styles.card}>
      {children}
    </div>
  );
}

const styles = {
  card: {
    background: "rgba(255,255,255,0.04)",
    padding: "18px",
    borderRadius: "14px",
    marginBottom: "12px",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    transition: "0.25s ease",
  },
};
