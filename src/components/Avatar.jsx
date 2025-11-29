export default function Avatar({ size = 40, src }) {
  const url =
    src ||
    "https://i.pravatar.cc/150?img=25"; // avatar padrão caso não envies imagem

  return (
    <img
      src={url}
      alt="avatar"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        objectFit: "cover",
        border: "2px solid rgba(250,204,107,0.6)",
        boxShadow: "0 0 8px rgba(250,204,107,0.3)",
      }}
    />
  );
}
