import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isConnected, disconnected, login } from "../../Redux/userSlice";
import ChatHistory from "../Chatbot/ChatHistory/ChatHistory";
import ChatInput from "../Chatbot/ChatInput/ChatInput";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io('http://localhost:4000');

function Chatbot() {
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([
    { role: "bot", content: "Hello! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");


  useEffect(() => {
    // Listen for bot messages from WebSocket server
    socket.on("bot-message", (message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", content: message }
      ]);
    });

    return () => {
      socket.off("bot-message");
    };
  }, []);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user's message to chat history
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: input }
    ]);

    // Send user's message to WebSocket server
    socket.emit("user-message", input);

    // Clear input
    setInput("");
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Chatbot</h1>

        {/* Pass messages as props to ChatHistory */}
        <ChatHistory messages={messages} />

        {/* Pass input and handlers as props to ChatInput */}
        <ChatInput
          input={input}
          setInput={setInput}
          handleSendMessage={handleSendMessage}
        />
        <button onClick={() => dispatch(disconnected())} style={{ marginLeft: "20px", padding: "10px" }}>
          Déconnexion
        </button>
      </div>
    </>
  );
}

export default Chatbot;
