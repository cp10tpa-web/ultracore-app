import React from "react";

export default function Profile() {
  return (
    <div>
      <h1 className="uc-screen-title">Perfil</h1>

      <div className="uc-card uc-profile-card">

        {/* Cover */}
        <div className="uc-profile-cover"></div>

        {/* Main */}
        <div className="uc-profile-main">

          {/* Avatar */}
          <div className="uc-profile-avatar">
            <img src="https://i.pravatar.cc/150?img=25" alt="avatar" />
          </div>

          <div className="uc-profile-name">Claudio Pereira</div>
          <div className="uc-profile-handle">@ultracore</div>

          <p className="uc-profile-bio">
            Founder da UltraCore • Criador • Visionário 🚀
          </p>

          <div className="uc-profile-actions">
            <button className="uc-btn uc-btn-soft uc-btn-sm">Editar Perfil</button>
            <button className="uc-btn uc-btn-gold uc-btn-sm">Partilhar Perfil</button>
          </div>

          <div className="uc-profile-stats">
            <div className="uc-profile-stat">
              <span className="num">132</span>
              <span className="label">Posts</span>
            </div>
            <div className="uc-profile-stat">
              <span className="num">4.8K</span>
              <span className="label">Seguidores</span>
            </div>
            <div className="uc-profile-stat">
              <span className="num">12.4K</span>
              <span className="label">Likes</span>
            </div>
          </div>

          <div className="uc-profile-placeholder">
            Aqui vão aparecer os teus posts e conteúdos.
          </div>
        </div>
      </div>
    </div>
  );
}
