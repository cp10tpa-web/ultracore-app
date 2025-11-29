import React from "react";
import { useUltraCore } from "../UltraCoreState";

const servers = ["🔥", "🎵", "💻", "🎮", "📸"];

const messages = [
  {
    id: 1,
    user: "UltraBot",
    avatar: "https://i.pravatar.cc/150?img=52",
    text: "Bem-vindo ao Ultra Spaces! 🚀",
    time: "agora mesmo",
  },
  {
    id: 2,
    user: "Claudio",
    avatar: "https://i.pravatar.cc/150?img=25",
    text: "Isto está a ficar brutal 🔥",
    time: "1 min",
  },
  {
    id: 3,
    user: "Ana",
    avatar: "https://i.pravatar.cc/150?img=36",
    text: "VisionPro vibes ❄️💙",
    time: "3 min",
  },
];

const voiceRooms = [
  {
    id: 1,
    name: "UltraCore Lounge",
    people: 128,
    type: "Público",
    status: "Live agora",
    vip: false,
  },
  {
    id: 2,
    name: "Creators HQ",
    people: 42,
    type: "Criadores",
    status: "Aberto",
    vip: false,
  },
  {
    id: 3,
    name: "Ultra VIP Room",
    people: 9,
    type: "UltraRank",
    status: "Só convidados",
    vip: true,
  },
];

export default function Spaces() {
  const { spendUC } = useUltraCore();


  const handleBoostRoom = () => {
    const ok = spendUC(25, "Boost visibilidade sala Spaces");
    if (!ok) {
      alert("Saldo insuficiente para fazer boost da sala.");
    } else {
      alert("Boost aplicado à sala (demo).");
    }
  };

  const handleEnterVip = () => {
    const ok = spendUC(50, "Entrada Ultra VIP Room");
    if (!ok) {
      alert("Saldo insuficiente para entrar na sala VIP.");
    } else {
      alert("Entrada VIP desbloqueada (demo).");
    }
  };

  return (
    <>
      <h1 className="uc-screen-title">Spaces 💬</h1>

      <div className="uc-ai-chip">
  <div className="uc-ai-chip-label">UltraAI Copilot</div>
  <div className="uc-ai-chip-pill">
    Tópicos e icebreakers para a conversa 🎙️
  </div>
</div>


      {/* Servidores (bolas de servidores) */}
      <div className="uc-spaces-servers" style={{ marginBottom: 14 }}>
        {servers.map((icon, i) => (
          <button key={i} className="uc-spaces-server">
            {icon}
          </button>
        ))}
      </div>

      {/* Ultra Spaces+ – Salas de Voz & Stage */}
      <div className="uc-card" style={{ marginBottom: 14 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--uc-soft)",
              }}
            >
              ULTRA SPACES+
            </div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                marginTop: 4,
              }}
            >
              Salas de Voz & Stage
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <button
              className="uc-btn uc-btn-gold uc-btn-sm"
              style={{ whiteSpace: "nowrap" }}
            >
              + Criar Sala
            </button>
            <button
              className="uc-btn uc-btn-soft uc-btn-sm"
              style={{ whiteSpace: "nowrap" }}
              onClick={handleBoostRoom}
            >
              🚀 Boost Sala (25 UC)
            </button>
          </div>
        </div>

        <div
          style={{
            fontSize: "0.86rem",
            color: "var(--uc-soft)",
            marginBottom: 10,
          }}
        >
          Entra em salas de voz, sobe ao palco e fala em tempo real com a
          comunidade UltraCore.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {voiceRooms.map((room) => (
            <div
              key={room.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 12px",
                borderRadius: 12,
                background: "rgba(15,23,42,0.9)",
                border: "1px solid rgba(148,163,184,0.35)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {room.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    fontSize: "0.8rem",
                    color: "var(--uc-soft)",
                  }}
                >
                  <span>👥 {room.people} online</span>
                  <span>•</span>
                  <span>{room.type}</span>
                </div>
              </div>
              <div style={{ textAlign: "right", fontSize: "0.8rem" }}>
                <div
                  style={{
                    marginBottom: 4,
                    color:
                      room.status === "Live agora"
                        ? "var(--uc-gold)"
                        : "var(--uc-soft)",
                    fontWeight:
                      room.status === "Live agora" ? 600 : "normal",
                  }}
                >
                  {room.status}
                </div>
                <button
                  className="uc-btn uc-btn-soft uc-btn-sm"
                  onClick={room.vip ? handleEnterVip : undefined}
                >
                  {room.vip ? "Entrar VIP (50 UC)" : "Entrar"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini estatísticas / Social XP (visual, sem lógica pesada) */}
      <div className="uc-card" style={{ marginBottom: 14 }}>
        <div
          style={{
            fontSize: "0.9rem",
            marginBottom: 8,
            fontWeight: 600,
          }}
        >
          Actividade em Spaces
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.85rem",
          }}
        >
          <div>
            <div
              style={{ fontSize: "0.78rem", color: "var(--uc-soft)" }}
            >
              Nível Social
            </div>
            <div style={{ fontWeight: 700 }}>LVL 7</div>
          </div>
          <div>
            <div
              style={{ fontSize: "0.78rem", color: "var(--uc-soft)" }}
            >
              Mensagens hoje
            </div>
            <div style={{ fontWeight: 700 }}>54</div>
          </div>
          <div>
            <div
              style={{ fontSize: "0.78rem", color: "var(--uc-soft)" }}
            >
              Tempo em voz
            </div>
            <div style={{ fontWeight: 700 }}>1h 32m</div>
          </div>
        </div>
      </div>

      {/* Chat de texto (Spaces global) */}
      <div className="uc-card">
        <div className="uc-chat-messages">
          {messages.map((m) => (
            <div key={m.id} className="uc-chat-message">
              <div className="uc-avatar">
                <img src={m.avatar} alt={m.user} />
              </div>
              <div>
                <div className="uc-chat-user">{m.user}</div>
                <div>{m.text}</div>
                <div className="uc-chat-time">{m.time}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="uc-chat-input-row">
          <input className="uc-chat-input" placeholder="Enviar mensagem..." />
          <button className="uc-btn uc-btn-gold uc-btn-sm">➤</button>
        </div>
      </div>
    </>
  );
}
