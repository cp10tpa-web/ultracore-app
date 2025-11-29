import React from "react";

export default function Match() {
  return (
    <>
      <h1 className="uc-screen-title">Ultra Match 💙</h1>

      <div className="uc-ai-chip">
  <div className="uc-ai-chip-label">UltraAI Copilot</div>
  <div className="uc-ai-chip-pill">
    Sugestões de bio e primeira mensagem 💌
  </div>
</div>


      <div className="uc-card uc-match-card">
        <div className="uc-match-photo">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="Carla"
          />
        </div>

        <div className="uc-match-info">
          <div className="uc-match-name">Carla, 21</div>
          <div className="uc-match-tags">Academia • Arte • Natureza 🌱</div>
        </div>

        <div className="uc-match-actions">
          <button className="uc-btn uc-btn-soft">❌ Nope</button>
          <button className="uc-btn uc-btn-gold">❤️ Like</button>
          <button className="uc-btn uc-btn-soft">⚡ Super</button>
        </div>
      </div>
    </>
  );
}
