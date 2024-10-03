import React from 'react'
import ReactMarkdown from 'react-markdown';

function ChatHistory({ messages }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      height: "300px",
      overflowY: "auto",
      marginBottom: "20px"
    }}>
      {messages.map((msg, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{msg.role === "bot" ? "Bot: " : "You: "}</strong>
          <ReactMarkdown>{msg.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
}

export default ChatHistory