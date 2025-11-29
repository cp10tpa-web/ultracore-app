// src/App.jsx
import { useState } from "react";
import "./App.css";

import Splash from "./screens/Splash.jsx";
import Login from "./screens/Login.jsx";

import { UltraCoreProvider } from "./UltraCoreState";

// Layout
import Header from "./components/Header.jsx";
import BottomNav from "./components/BottomNav.jsx";
import SideMenu from "./components/SideMenu.jsx";
import ChatPanel from "./components/ChatPanel.jsx";

// Screens
import UltraAI from "./screens/UltraAI.jsx";
import Social from "./screens/Social.jsx";
import Match from "./screens/Match.jsx";
import Spaces from "./screens/Spaces.jsx";
import Creator from "./screens/Creator.jsx";
import Private from "./screens/Private.jsx";
import Profile from "./screens/Profile.jsx";
import Wallet from "./screens/Wallet.jsx";
import Store from "./screens/Store.jsx";
import UltraRank from "./screens/UltraRank.jsx";
import Notifications from "./screens/Notifications.jsx";

function AppContent() {
  const [screen, setScreen] = useState("social");
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [aiOpen, setAIOpen] = useState(false);   // <-- ADICIONADO

  const goToScreen = (s) => {
    setScreen(s);
    setMenuOpen(false);
    setChatOpen(false);
    setAIOpen(false);
  };

  const screens = {
    social: <Social />,
    match: <Match />,
    spaces: <Spaces />,
    creator: <Creator />,
    private: <Private />,
    profile: <Profile />,
    wallet: <Wallet />,
    store: <Store />,
    rank: <UltraRank />,
    notifications: <Notifications />,
    ultraAI: <UltraAI />,
  };

  return (
    <div className="uc-app-shell">

      <Header
        onMenu={() => setMenuOpen(true)}
        onBell={() => goToScreen("notifications")}
        onChat={() => setChatOpen(true)}
        onAI={() => setAIOpen(true)}         // <-- FUNCIONA AGORA
        onProfile={() => goToScreen("profile")}
      />

      <div className="uc-main">
        <div className="uc-screen-wrapper">{screens[screen]}</div>
      </div>

      <BottomNav active={screen} onChange={goToScreen} />

      <ChatPanel
  open={chatOpen}
  onClose={() => setChatOpen(false)}
/>

{/* ULTRA AI PANEL — ENTRA EXACTAMENTE AQUI */}
{aiOpen && (
  <div className="uc-ai-panel">
    <div className="uc-ai-header">
      <div>
        <h2>Ultra AI 💫</h2>
        <p className="uc-ai-sub">Companion • Sempre contigo 24/7</p>
      </div>

      <button className="uc-ai-close" onClick={() => setAIOpen(false)}>
        ✖
      </button>
    </div>

    {/* Interior da IA */}
    <UltraAI />
  </div>
)}
{/* FIM DO PAINEL */}

<SideMenu
  open={menuOpen}
  onClose={() => setMenuOpen(false)}
  onNavigate={goToScreen}
/>

    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);

  if (loading) return <Splash onFinish={() => setLoading(false)} />;
  if (!logged) return <Login onLogin={() => setLogged(true)} />;

  return (
    <UltraCoreProvider>
      <AppContent />
    </UltraCoreProvider>
  );
}
