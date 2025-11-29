import React from "react";
import { useUltraCore } from "../UltraCoreState";

export default function Wallet() {
  const { ucBalance, transactions } = useUltraCore();

  const totalIn = transactions
    .filter((t) => t.type === "entrada")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalOut = transactions
    .filter((t) => t.type === "saída")
    .reduce((sum, t) => sum + t.amount, 0);

  const estChf = Math.round(ucBalance / 10); // estimativa simples

  return (
    <>
      <h1 className="uc-screen-title">Ultra Wallet 💰</h1>

      {/* Saldo principal */}
      <div className="uc-card" style={{ marginBottom: 16 }}>
        <div
          style={{
            fontSize: "0.8rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--uc-soft)",
            marginBottom: 6,
          }}
        >
          SALDO ACTUAL
        </div>
        <div
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: 4,
          }}
        >
          {ucBalance.toLocaleString("pt-PT")} UC
        </div>
        <div
          style={{
            fontSize: "0.9rem",
            color: "var(--uc-soft)",
            marginBottom: 12,
          }}
        >
          ~ {estChf} CHF (estimativa não vinculativa)
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
          }}
        >
          <button className="uc-btn uc-btn-gold uc-btn-sm" style={{ flex: 1 }}>
            Comprar UC
          </button>
          <button className="uc-btn uc-btn-soft uc-btn-sm" style={{ flex: 1 }}>
            Levantar ganhos
          </button>
        </div>
      </div>

      {/* Resumo criador */}
      <div className="uc-card" style={{ marginBottom: 16 }}>
        <div
          style={{
            fontSize: "0.9rem",
            marginBottom: 8,
            fontWeight: 600,
          }}
        >
          Estatísticas deste mês
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.85rem",
          }}
        >
          <div>
            <div style={{ fontWeight: 600 }}>Ganhos</div>
            <div style={{ color: "var(--uc-gold)" }}>
              + {totalIn.toLocaleString("pt-PT")} UC
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>Gasto em boosts</div>
            <div style={{ color: "#f97373" }}>
              - {totalOut.toLocaleString("pt-PT")} UC
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>Subscritores</div>
            <div style={{ color: "var(--uc-soft)" }}>34 activos</div>
          </div>
        </div>
      </div>

      {/* Histórico */}
      <div className="uc-card">
        <div
          style={{
            fontSize: "0.9rem",
            marginBottom: 10,
            fontWeight: 600,
          }}
        >
          Movimentos recentes
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: "0.86rem",
          }}
        >
          {transactions.map((t) => (
            <div
              key={t.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div>{t.desc}</div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--uc-soft)",
                  }}
                >
                  {t.time} • {t.type === "entrada" ? "Entrada" : "Saída"}
                </div>
              </div>
              <div
                style={{
                  fontWeight: 600,
                  color:
                    t.type === "entrada" ? "var(--uc-gold)" : "#f97373",
                }}
              >
                {t.type === "entrada" ? "+" : "-"}
                {t.amount} UC
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
