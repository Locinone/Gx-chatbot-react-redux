import React from 'react'

function ChatInput({ input, setInput, handleSendMessage }) {
    return (
      <>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
          style={{
            width: "80%",
            padding: "10px",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc"
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage} style={{ padding: "10px" }}>
          Send
        </button>
      </>
    );
  }

export default ChatInput