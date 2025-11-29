// src/screens/UltraAI.jsx
import { useState } from "react";

export default function UltraAI() {
  const [messages, setMessages] = useState([
    { from: "ai", text: "Olá Claudio 👋 Como posso ajudar hoje?" }
  ]);

  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;

    const userMsg = { from: "user", text };
    setMessages((prev) => [...prev, userMsg]);

    setText("");

    // resposta futura da IA (placeholder)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "A processar… vou evoluir ainda mais 😎🤖" }
      ]);
    }, 600);
  };

  return (
    <div className="uc-ai-body">
      <div className="uc-ai-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={
              msg.from === "user" ? "uc-ai-msg user" : "uc-ai-msg ai"
            }
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="uc-ai-input-row">
        <input
          className="uc-ai-input"
          placeholder="Escreve algo para a Ultra AI…"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="uc-ai-send" onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
}
