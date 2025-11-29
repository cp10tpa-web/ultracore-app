import React from "react";

const items = [
  { id: "social", label: "Social" },
  { id: "match", label: "Match" },
  { id: "spaces", label: "Spaces" },
  { id: "creator", label: "Creator" },
  { id: "private", label: "Private" },
];

export default function BottomNav({ active, onChange }) {
  return (
    <nav className="uc-bottom-nav">
      {items.map((it) => (
        <button
          key={it.id}
          className={
            "uc-bottom-item" +
            (active === it.id ? " uc-bottom-item--active" : "")
          }
          onClick={() => onChange(it.id)}
        >
          <span className="uc-bottom-dot">•</span>
          <span className="uc-bottom-label">{it.label}</span>
        </button>
      ))}
    </nav>
  );
}
