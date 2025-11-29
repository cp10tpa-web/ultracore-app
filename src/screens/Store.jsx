import React from "react";
import { useUltraCore } from "../UltraCoreState";

export default function Store() {
  const { ucPacks, boosts, buyPack, buyBoost } = useUltraCore();

  const handlePack = (id) => {
    const ok = buyPack(id);
    if (!ok) {
      alert("Saldo insuficiente para este pack.");
    } else {
      alert("Pack comprado com sucesso (demo).");
    }
  };

  const handleBoost = (id) => {
    const ok = buyBoost(id);
    if (!ok) {
      alert("Saldo insuficiente para este boost.");
    } else {
      alert("Boost activado (demo).");
    }
  };

  return (
    <>
      <h1 className="uc-screen-title">Ultra Store 🏪</h1>

      {/* Header da store */}
      <div className="uc-card" style={{ marginBottom: 18 }}>
        <div style={{ fontSize: "0.8rem", letterSpacing: "0.14em" }}>
          ULTRA PACKS
        </div>
        <div
          style={{
            fontSize: "1.4rem",
            color: "var(--uc-gold)",
            fontWeight: 700,
            marginTop: 4,
          }}
        >
          UC Coins
        </div>
        <div
          style={{
            fontSize: "0.9rem",
            color: "#d1d5db",
            marginTop: 6,
          }}
        >
          Compra packs para boosts no Match, Private, Lives e Creator.
        </div>
      </div>

      {/* Packs de UC */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginBottom: 18,
        }}
      >
        {ucPacks.map((p) => (
          <div key={p.id} className="uc-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 10,
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    marginBottom: 2,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--uc-soft)",
                    marginBottom: 4,
                  }}
                >
                  Perfeito para explorar a UltraCore.
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--uc-gold)",
                  }}
                >
                  {p.amount.toLocaleString("pt-PT")} UC
                </div>
              </div>
              <button
                className="uc-btn uc-btn-gold uc-btn-sm"
                onClick={() => handlePack(p.id)}
              >
                {p.price} CHF
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Boosts in-app */}
      <div className="uc-card">
        <div
          style={{
            fontSize: "0.9rem",
            marginBottom: 10,
            fontWeight: 600,
          }}
        >
          Boosts Ultra 🚀
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: "0.86rem",
          }}
        >
          {boosts.map((b) => (
            <div
              key={b.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 10,
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{b.name}</div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--uc-soft)",
                  }}
                >
                  {/* descrição simples só para demo */}
                  Este boost aumenta a tua visibilidade na UltraCore.
                </div>
              </div>
              <button
                className="uc-btn uc-btn-soft uc-btn-sm"
                onClick={() => handleBoost(b.id)}
              >
                {b.cost} UC
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}


