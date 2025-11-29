import React from "react";
import { useUltraCore } from "../UltraCoreState";

const posts = [
  {
    id: 1,
    title: "Novo Set Premium ✨",
    desc: "Conteúdo exclusivo em alta resolução.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=900",
    locked: true,
    price: "120 UC",
  },
  {
    id: 2,
    title: "Behind the Scenes 🎬",
    desc: "Momentos únicos de bastidores.",
    image:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=900",
    locked: false,
  },
];

export default function Private() {
  const { spendUC } = useUltraCore();

  const handleTier = (amount, name) => {
    const ok = spendUC(amount, `Subscrição ${name}`);
    if (!ok) {
      alert("Saldo insuficiente para esta subscrição.");
    } else {
      alert(`Subscrição ${name} activada (demo).`);
    }
  };

  const handleUnlock = (post) => {
    if (!post.locked) return;
    const numeric = parseInt(post.price); // "120 UC" -> 120
    const ok = spendUC(numeric, `Desbloquear conteúdo: ${post.title}`);
    if (!ok) {
      alert("Saldo insuficiente para desbloquear este conteúdo.");
    } else {
      alert("Conteúdo desbloqueado (demo).");
    }
  };

  return (
    <>
      <h1 className="uc-screen-title">Ultra Private 🔥</h1>

      <div className="uc-ai-chip">
  <div className="uc-ai-chip-label">UltraAI Copilot</div>
  <div className="uc-ai-chip-pill">
    Ideias de conteúdos premium e packs 💛
  </div>
</div>


      {/* Perfil Private */}
      <div className="uc-card" style={{ marginBottom: 14 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <div className="uc-avatar" style={{ width: 56, height: 56 }}>
            <img src="https://i.pravatar.cc/150?img=25" alt="Claudio" />
          </div>
          <div>
            <div style={{ fontWeight: 700 }}>Claudio Private 💛</div>
            <div style={{ fontSize: "0.9rem", color: "#d1d5db" }}>
              Conteúdos exclusivos • Lifestyle • VIP
            </div>
          </div>
        </div>
        <button
          className="uc-btn uc-btn-gold uc-btn-sm"
          style={{ width: "100%", marginTop: 14 }}
        >
          Editar Perfil
        </button>
      </div>

      {/* Tiers de Subscrição */}
      <div className="uc-card" style={{ marginBottom: 16 }}>
        <div
          style={{
            marginBottom: 10,
            fontSize: "1rem",
            fontWeight: 600,
            color: "var(--uc-gold)",
          }}
        >
          Subscrições
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {/* Bronze */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontWeight: 600 }}>Bronze Tier</div>
              <div style={{ fontSize: "0.8rem", color: "var(--uc-soft)" }}>
                Acesso básico mensal
              </div>
            </div>
            <button
              className="uc-btn uc-btn-soft uc-btn-sm"
              onClick={() => handleTier(150, "Bronze")}
            >
              150 UC
            </button>
          </div>

          {/* Gold */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontWeight: 600 }}>Gold Tier</div>
              <div style={{ fontSize: "0.8rem", color: "var(--uc-soft)" }}>
                Conteúdos completos + lives privados
              </div>
            </div>
            <button
              className="uc-btn uc-btn-gold uc-btn-sm"
              onClick={() => handleTier(350, "Gold")}
            >
              350 UC
            </button>
          </div>

          {/* Diamond */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontWeight: 600 }}>Diamond Tier</div>
              <div style={{ fontSize: "0.8rem", color: "var(--uc-soft)" }}>
                Tudo incluído + bastidores + PPVs grátis
              </div>
            </div>
            <button
              className="uc-btn uc-btn-gold uc-btn-sm"
              onClick={() => handleTier(750, "Diamond")}
            >
              750 UC
            </button>
          </div>
        </div>
      </div>

      {/* Painel Estatísticas */}
      <div className="uc-card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: "0.9rem", marginBottom: 8, fontWeight: 600 }}>
          Estatísticas
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.85rem",
          }}
        >
          <div>
            <div style={{ fontSize: "0.78rem", color: "var(--uc-soft)" }}>
              Subscritores ativos
            </div>
            <div style={{ fontWeight: 700 }}>48</div>
          </div>

          <div>
            <div style={{ fontSize: "0.78rem", color: "var(--uc-soft)" }}>
              PPV vendidos
            </div>
            <div style={{ fontWeight: 700 }}>19</div>
          </div>

          <div>
            <div style={{ fontSize: "0.78rem", color: "var(--uc-soft)" }}>
              Ganhos do mês
            </div>
            <div style={{ color: "var(--uc-gold)", fontWeight: 700 }}>
              + 940 UC
            </div>
          </div>
        </div>
      </div>

      {/* Mini Store interna */}
      <div className="uc-card" style={{ marginBottom: 16 }}>
        <div style={{ fontSize: "0.9rem", marginBottom: 8, fontWeight: 600 }}>
          Extras Exclusivos
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <button
            className="uc-btn uc-btn-soft uc-btn-sm"
            onClick={() =>
              handleTier(200, "Extra • Fotografia Ultra HD")
            }
          >
            Fotografia Ultra HD • 200 UC
          </button>
          <button
            className="uc-btn uc-btn-soft uc-btn-sm"
            onClick={() =>
              handleTier(350, "Extra • Vídeo Exclusivo Premium")
            }
          >
            Video Exclusivo Premium • 350 UC
          </button>
        </div>
      </div>

      {/* Conteúdos */}
      <div
        style={{
          fontWeight: 600,
          color: "var(--uc-gold)",
          marginBottom: 10,
        }}
      >
        Conteúdos
      </div>

      <div className="uc-private-grid">
        {posts.map((p) => (
          <div key={p.id} className="uc-card" style={{ padding: 0 }}>
            <div className="uc-private-image">
              <img src={p.image} alt={p.title} />
            </div>

            <div style={{ padding: "12px 14px 14px" }}>
              <div style={{ marginBottom: 4, fontWeight: 600 }}>
                {p.title}
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "#d1d5db",
                  marginBottom: 10,
                }}
              >
                {p.desc}
              </div>

              {p.locked && (
                <button
                  className="uc-btn uc-btn-gold uc-btn-sm"
                  style={{ width: "100%" }}
                  onClick={() => handleUnlock(p)}
                >
                  🔒 Desbloquear • {p.price}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
