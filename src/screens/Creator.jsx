import React, { useState } from "react";
import { useUltraCore } from "../UltraCoreState";

const videos = [
  {
    id: 1,
    title: "Como fiz a UltraCore 💛🔥",
    views: "3.2K views",
    earnings: "220 UC",
    thumb:
      "https://images.pexels.com/photos/277552/pexels-photo-277552.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 2,
    title: "Efeito visual avançado ⚡",
    views: "1.1K views",
    earnings: "80 UC",
    thumb:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

const reels = [
  {
    id: 1,
    title: "UltraCore sneak peek",
    views: "890 views",
  },
  {
    id: 2,
    title: "Behind the build",
    views: "640 views",
  },
];

export default function Creator() {
  const { addUC } = useUltraCore();
  const [liveMode, setLiveMode] = useState(false);

  const handleOpenLiveModal = () => {
    setLiveMode(true);
  };

  const handleStartLive = () => {
    // aqui seria "ir para live"; na demo só fechamos o modal
    setLiveMode(false);
    alert("Live iniciada (demo). A economia UC regista ganhos no fim.");
  };

  const handleEndLiveDemo = () => {
    // simula ganhos de live
    addUC(120, "Ganhos Live UltraCore");
    alert("Live terminada. +120 UC adicionados (demo).");
  };

  const handlePublishVideo = () => {
    addUC(60, "Monetização vídeo UltraCore");
    alert("Vídeo criado. +60 UC estimados (demo).");
  };

  const handlePublishReel = () => {
    addUC(30, "Monetização reel UltraCore");
    alert("Reel criado. +30 UC estimados (demo).");
  };

  return (
    <>
      <h1 className="uc-screen-title">Ultra Creator 🎥</h1>

      <div className="uc-ai-chip">
  <div className="uc-ai-chip-label">UltraAI Copilot</div>
  <div className="uc-ai-chip-pill">
    Títulos, descrições e ideias de vídeos 📹
  </div>
</div>


      {/* =======================
          LIVE MODE (OVERLAY)
      ========================== */}
      {liveMode && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
            zIndex: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 420,
              background: "rgba(15,23,42,0.95)",
              border: "1px solid rgba(250,204,107,0.35)",
              borderRadius: 16,
              padding: 20,
            }}
          >
            <h2 style={{ marginBottom: 10 }}>🎙️ Preparar Live</h2>

            <div style={{ marginBottom: 16, fontSize: "0.9rem" }}>
              Define o título, a categoria e o layout antes de ires para o ar.
            </div>

            <input
              placeholder="Título da Live..."
              style={{
                width: "100%",
                padding: "10px 14px",
                marginBottom: 12,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(148,163,184,0.35)",
                borderRadius: 10,
                color: "white",
              }}
            />

            <select
              style={{
                width: "100%",
                padding: "10px 14px",
                marginBottom: 18,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(148,163,184,0.35)",
                borderRadius: 10,
                color: "white",
              }}
            >
              <option>Categoria: Lifestyle</option>
              <option>Categoria: Gaming</option>
              <option>Categoria: Tech</option>
            </select>

            <button
              className="uc-btn uc-btn-gold uc-btn-sm"
              style={{ width: "100%", marginBottom: 10 }}
              onClick={handleStartLive}
            >
              Iniciar Live
            </button>

            <button
              className="uc-btn uc-btn-soft uc-btn-sm"
              style={{ width: "100%" }}
              onClick={() => setLiveMode(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* =======================
          DASHBOARD
      ========================== */}
      <div className="uc-card" style={{ marginBottom: 18 }}>
        <div style={{ fontSize: "0.9rem", color: "#9ca3af" }}>Dashboard</div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "12px 0 16px",
          }}
        >
          <div>
            <div style={{ fontWeight: 700 }}>12.4K</div>
            <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
              Visualizações
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700 }}>3.8K</div>
            <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>Likes</div>
          </div>
          <div>
            <div style={{ fontWeight: 700 }}>540 UC</div>
            <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>Ganhos</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <button
            className="uc-btn uc-btn-gold uc-btn-sm"
            onClick={handleOpenLiveModal}
          >
            Live Mode
          </button>
          <button
            className="uc-btn uc-btn-soft uc-btn-sm"
            onClick={handlePublishVideo}
          >
            Criar Vídeo
          </button>
          <button
            className="uc-btn uc-btn-soft uc-btn-sm"
            onClick={handlePublishReel}
          >
            Criar Reel
          </button>
          <button
            className="uc-btn uc-btn-soft uc-btn-sm"
            onClick={handleEndLiveDemo}
          >
            Terminar Live (demo ganhos)
          </button>
        </div>
      </div>

      {/* =======================
          STUDIO TOOLS
      ========================== */}
      <div className="uc-card" style={{ marginBottom: 16 }}>
        <div
          style={{
            marginBottom: 12,
            fontSize: "1rem",
            fontWeight: 600,
            color: "var(--uc-gold)",
          }}
        >
          Studio Tools 🛠️
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Layouts</div>
            <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
              Grelhas, full-screen, picture-in-picture…
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Overlays</div>
            <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
              Alertas animados, banners, transições…
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Cenas</div>
            <div style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
              Troca instantânea entre ambientes visuais.
            </div>
          </div>
        </div>
      </div>

      {/* =======================
          REELS
      ========================== */}
      <div style={{ fontSize: "0.95rem", marginBottom: 8 }}>Os teus Reels</div>
      <div className="uc-creator-grid" style={{ marginBottom: 16 }}>
        {reels.map((r) => (
          <div key={r.id} className="uc-card">
            <div
              style={{
                width: "100%",
                aspectRatio: "9/16",
                borderRadius: 14,
                overflow: "hidden",
                background:
                  "linear-gradient(135deg, rgba(250,204,107,0.2), rgba(56,189,248,0.2))",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.9rem",
              }}
            >
              🎬 {r.title}
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "#9ca3af",
                marginTop: 6,
              }}
            >
              {r.views}
            </div>
          </div>
        ))}
      </div>

      {/* =======================
          VÍDEOS
      ========================== */}
      <div style={{ fontSize: "0.95rem", marginBottom: 10 }}>
        Os teus vídeos
      </div>

      <div className="uc-creator-grid">
        {videos.map((v) => (
          <div key={v.id} className="uc-card">
            <div className="uc-video-thumb">
              <img src={v.thumb} alt={v.title} />
            </div>
            <div style={{ fontSize: "0.95rem", marginBottom: 2 }}>
              {v.title}
            </div>
            <div style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
              {v.views} • {v.earnings}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
