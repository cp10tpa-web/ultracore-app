import React from "react";

const notifs = [
  { id: 1, text: "Novo match com Ana 🎉", time: "há 2 min" },
  { id: 2, text: "Alguém subscreveu o teu Private 💛", time: "há 1 h" },
  { id: 3, text: "Recebeste 120 UC em tips 💰", time: "há 3 h" },
];

export default function Notifications() {
  return (
    <>
      <h1 className="uc-screen-title">Notificações 🔔</h1>

      <div className="uc-card">
        {notifs.map((n) => (
          <div key={n.id} className="uc-notif-item">
            <span className="uc-notif-text">{n.text}</span>
            <span className="uc-notif-time">{n.time}</span>
          </div>
        ))}
      </div>
    </>
  );
}
