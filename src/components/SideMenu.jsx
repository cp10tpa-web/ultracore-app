import React from "react";

const links = [
  { id: "profile", label: "Meu Perfil" },
  { id: "wallet", label: "Wallet" },
  { id: "store", label: "Ultra Store" },
  { id: "rank", label: "UltraRank" },
];

export default function SideMenu({ open, onClose, onNavigate }) {
  return (
    <div className={`uc-sidemenu-backdrop ${open ? "open" : ""}`} onClick={onClose}>
      <div
        className={`uc-sidemenu ${open ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="uc-sidemenu-header">
          <div className="uc-sidemenu-title">Menu</div>
          <button className="uc-sidemenu-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="uc-sidemenu-nav">
          {links.map((l) => (
            <button
              key={l.id}
              className="uc-sidemenu-item"
              onClick={() => onNavigate(l.id)}
            >
              <span>•</span>
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
