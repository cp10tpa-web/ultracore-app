export default function ChatPanel({ open, onClose }) {
  return (
    <div className={`uc-chat-panel ${open ? "open" : ""}`}>
      <div className="uc-chat-title">
        Mensagens
        <span className="uc-chat-close" onClick={onClose}>✕</span>
      </div>

      <div className="uc-chat-messages">
        <div className="uc-chat-message">Bem-vindo ao chat 💬</div>
      </div>

      <div className="uc-chat-input-row">
        <input className="uc-chat-input" placeholder="Escrever mensagem..." />
        <button className="uc-chat-send">➤</button>
      </div>
    </div>
  );
}

