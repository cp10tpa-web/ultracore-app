import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  // ⚠️ Define aqui o username e password
  const VALID_USER = "ultra";  // <-- muda se quiseres
  const VALID_PASS = "1234";     // <-- muda se quiseres

  const submit = () => {
    if (!user || !pass) {
      setError("Preenche todos os campos.");
      return;
    }

    if (user.toLowerCase() !== VALID_USER.toLowerCase()) {
      setError("Nome de utilizador incorreto.");
      return;
    }

    if (pass !== VALID_PASS) {
      setError("Password incorreta.");
      return;
    }

    setError("");
    onLogin();
  };

  return (
    <div className="uc-login">
      <div className="uc-login-box">
        <div className="uc-login-title">UltraCore</div>
        <div className="uc-login-sub">Bem-vindo ao futuro 💠</div>

        {error && <div className="uc-login-error">{error}</div>}

        <input
          className="uc-login-input"
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          className="uc-login-input"
          placeholder="Password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button
          className="uc-btn uc-btn-gold"
          style={{ width: "100%" }}
          onClick={submit}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
