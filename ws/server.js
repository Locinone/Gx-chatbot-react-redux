const { Server } = require("socket.io");
const axios = require('axios');
const http = require("http");

const server = http.createServer();
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

// Replace with your Mistral AI API endpoint and key
const MISTRAL_API_URL = 'https://api.mistral.ai/v1/chat/completions';
const MISTRAL_API_KEY = 'OP3eJW0jpvKd2qOO1JWcbmJQyKNUUGfV';

io.on("connection", (socket) => {
    console.log("A user connected 🤵🏽");

    socket.on("user-message", async (message) => {
        try {
            // Send the user's message to Mistral API for text completion
            const response = await axios.post(
                MISTRAL_API_URL,
                {
                    model: "mistral-large-latest",
                    messages: [{ role: "user", content: message }]
                },
                {
                    headers: {
                        'Authorization': `Bearer ${MISTRAL_API_KEY}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                }
            );

            // Send the bot's response back to the client
            console.log("Mistral API response:", response.data);
            const botResponse = response.data.choices[0].message.content;
            socket.emit("bot-message", botResponse);
        } catch (error) {
            console.error("Error with Mistral API:", error);
            socket.emit("bot-message", "Sorry, something went wrong.");
        }
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

server.listen(4000, () => {
    console.log("WebSocket server is running on http://localhost:4000");
});
