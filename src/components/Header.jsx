// src/components/Header.jsx
import React from "react";

export default function Header({ onMenu, onBell, onChat, onAI, onProfile }) {
  return (
    <header className="uc-header">
      <div className="uc-header-left">
        <button className="uc-header-icon-btn" onClick={onMenu}>☰</button>
        <div className="uc-header-title">UltraCore</div>
      </div>

      <div className="uc-header-right">

        {/* Notificações */}
        <button className="uc-header-icon-btn" onClick={onBell}>🔔</button>

        {/* MENSAGENS – AO LADO DAS NOTIFICAÇÕES */}
        <button className="uc-header-icon-btn" onClick={onChat}>💬</button>

        {/* ULTRA AI BUTTON */}
        <button className="uc-header-ai-btn" onClick={onAI}>🤖</button>

        {/* Avatar / Perfil */}
        <div className="uc-header-avatar" onClick={onProfile}>
          <img src="https://i.pravatar.cc/150?img=25" alt="Claudio" />
        </div>

      </div>
    </header>
  );
}
