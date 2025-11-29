import React from "react";

const posts = [
  {
    id: 1,
    name: "Ana Silva",
    time: "2h atrás",
    text: "A desenvolver ideias novas 🔥✨",
    avatar: "https://i.pravatar.cc/150?img=47",
    image:
      "https://images.pexels.com/photos/2816166/pexels-photo-2816166.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 2,
    name: "Rui Martins",
    time: "5h atrás",
    text: "UltraCore is coming 💜💛",
    avatar: "https://i.pravatar.cc/150?img=12",
    image:
      "https://images.pexels.com/photos/210603/pexels-photo-210603.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

export default function Social() {
  return (
    <div>
      <h1 className="uc-screen-title">Ultra Feed</h1>

 <div className="uc-ai-chip">
  <div className="uc-ai-chip-label">UltraAI Copilot</div>
  <div className="uc-ai-chip-pill">
    Ideias de posts, legendas e hashtags ✨
  </div>
</div>



      {/* Área de criar post */}
      <div className="uc-card uc-feed-create">
        <div className="uc-feed-create-row">
          <div className="uc-avatar">
            <img src="https://i.pravatar.cc/150?img=25" alt="Claudio" />
          </div>

          <input
            className="uc-feed-input"
            placeholder="Partilha algo com o mundo..."
          />
        </div>

        <div className="uc-feed-actions">
          <button className="uc-btn uc-btn-soft uc-btn-sm">📷 Foto</button>
          <button className="uc-btn uc-btn-gold uc-btn-sm">✨ Publicar</button>
        </div>
      </div>

      {/* Lista de posts */}
      <div className="uc-post-list">
        {posts.map((p) => (
          <div key={p.id} className="uc-card uc-post-card">
            <div className="uc-post-header">
              <div className="uc-avatar">
                <img src={p.avatar} alt={p.name} />
              </div>

              <div>
                <div className="uc-post-name">{p.name}</div>
                <div className="uc-post-time">{p.time}</div>
              </div>
            </div>

            <div className="uc-post-text">{p.text}</div>

            <div className="uc-post-image">
              <img src={p.image} alt="post" />
            </div>

            <div className="uc-post-actions">
              <button className="uc-btn uc-btn-soft uc-btn-sm">❤️ Like</button>
              <button className="uc-btn uc-btn-soft uc-btn-sm">💬 Comentar</button>
              <button className="uc-btn uc-btn-soft uc-btn-sm">📤 Partilhar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
