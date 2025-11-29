// src/components/Card.jsx

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`ultra-card ${className}`}
      style={{
        background: "rgba(15,15,25,0.55)",
        padding: "18px",
        borderRadius: "18px",
        marginBottom: "18px",
        border: "1px solid rgba(250,204,107,0.15)",
        boxShadow: "0 0 40px rgba(250,204,107,0.05)",
        backdropFilter: "blur(14px)",
      }}
    >
      {children}
    </div>
  );
}
