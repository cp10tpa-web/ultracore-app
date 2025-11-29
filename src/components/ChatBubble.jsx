import React from "react";

export default function ChatBubble({ onClick }) {
  return (
    <button className="uc-chat-bubble" onClick={onClick}>
      💬
    </button>
  );
}
