import React from "react";

export default function UltraRank() {
  return (
    <>
      <h1 className="uc-screen-title">UltraRank 🏆</h1>

      <div className="uc-card uc-rank-card uc-rank-hover" style={{ marginBottom: 12 }}>
        <div className="uc-rank-desc">
          Sobe de nível e desbloqueia mais visibilidade, boosts e badges exclusivos.
        </div>

        <div>
          <strong>O teu rank actual:</strong>{" "}
          <span className="uc-rank-current">Ultra Gold</span>
        </div>
      </div>

      <div className="uc-card uc-rank-hover">
        <ul className="uc-rank-list">
          <li>Mais 2x visibilidade no Ultra Match</li>
          <li>Badge dourada no Feed e Spaces</li>
          <li>Boost extra por semana para Private</li>
        </ul>
      </div>
    </>
  );
}
