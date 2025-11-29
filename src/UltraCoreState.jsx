import { createContext, useContext, useState } from "react";

const UltraCoreContext = createContext();

export function UltraCoreProvider({ children }) {
  /* ============================================================
     🇺🇸 ULTRA CORE ECONOMY SYSTEM (UC Coins)
     Estado global da economia interna
  ============================================================ */

  const [ucBalance, setUcBalance] = useState(2340); // Saldo inicial
  const [rank, setRank] = useState("Ultra Gold");
  const [transactions, setTransactions] = useState([
    { id: 1, type: "entrada", amount: 350, desc: "Subscrição Private", time: "há 2h" },
    { id: 2, type: "entrada", amount: 120, desc: "Tips Live", time: "há 5h" },
    { id: 3, type: "saída", amount: 40, desc: "Boost UltraMatch", time: "ontem" },
  ]);

  const [inventory, setInventory] = useState([]);


  /* ============================================================
     ⚡ PACKS UC (Ultra Store)
  ============================================================ */
  const ucPacks = [
    { id: "starter", name: "Starter Pack", amount: 500, price: 7 },
    { id: "creator", name: "Creator Pack", amount: 2500, price: 24 },
    { id: "ultra", name: "Ultra Pack", amount: 6000, price: 49 },
  ];

  /* ============================================================
     🎯 BOOSTS (Match, Feed, Private)
  ============================================================ */
  const boosts = [
    { id: "match", name: "Ultra Match Boost", cost: 40 },
    { id: "highlight", name: "Feed Highlight", cost: 65 },
    { id: "spotlight", name: "Private Spotlight", cost: 90 },
  ];

  /* ============================================================
     FUNÇÕES PRINCIPAIS
  ============================================================ */

  // Adicionar UC manualmente (ganhos, subscrições, etc)
  const addUC = (amount, desc = "Ganho") => {
    setUcBalance((prev) => prev + amount);
    addTransaction("entrada", amount, desc);
  };

  // Gastar UC
  const spendUC = (amount, desc = "Compra") => {
    if (ucBalance < amount) return false;

    setUcBalance((prev) => prev - amount);
    addTransaction("saída", amount, desc);
    return true;
  };

  // Registrar transações
  const addTransaction = (type, amount, desc) => {
    const t = {
      id: Date.now(),
      type,
      amount,
      desc,
      time: "agora mesmo",
    };
    setTransactions((prev) => [t, ...prev]);
  };

  // Comprar Pack UC
  const buyPack = (packId) => {
    const pack = ucPacks.find((p) => p.id === packId);
    if (!pack) return false;

    addUC(pack.amount, `Pack: ${pack.name}`);
    return true;
  };

  // Usar Boost
  const buyBoost = (boostId) => {
    const b = boosts.find((x) => x.id === boostId);
    if (!b) return false;

    if (!spendUC(b.cost, `Boost: ${b.name}`)) return false;

    return true;
  };

  // Comprar itens internos
  const buyItem = (item) => {
    if (spendUC(item.price, item.name)) {
      setInventory((prev) => [...prev, item]);
      return true;
    }
    return false;
  };

  // Mudar Rank
  const upgradeRank = (newRank) => setRank(newRank);


  /* ============================================================
     EXPORTAÇÃO DO SISTEMA
  ============================================================ */
  return (
    <UltraCoreContext.Provider
      value={{
        ucBalance,
        rank,
        transactions,
        inventory,

        ucPacks,
        boosts,

        addUC,
        spendUC,
        buyPack,
        buyBoost,
        buyItem,
        upgradeRank,
      }}
    >
      {children}
    </UltraCoreContext.Provider>
  );
}

export function useUltraCore() {
  return useContext(UltraCoreContext);
}
