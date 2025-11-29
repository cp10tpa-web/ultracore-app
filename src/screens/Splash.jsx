import React, { useEffect } from "react";

export default function Splash({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(() => onFinish(), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="uc-splash">
      <div className="uc-splash-logo">UltraCore</div>
      <div className="uc-splash-sub">Enter The Future</div>
    </div>
  );
}
