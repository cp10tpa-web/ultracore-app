export default function Avatar({ src, size = 60 }) {
  const avatarStyle = {
    width: size + "px",
    height: size + "px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.05)",
    border: "2px solid rgba(250,204,107,0.45)",
    boxShadow: "0 0 10px rgba(250,204,107,0.25)",
    objectFit: "cover",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#facc6b",
    fontWeight: "bold",
    fontSize: size * 0.35 + "px",
  };

  // fallback no caso de não ter imagem
  const fallback = "U";

  return (
    <div style={avatarStyle}>
      {src ? (
        <img
          src={src}
          alt="avatar"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      ) : (
        fallback
      )}
    </div>
  );
}
