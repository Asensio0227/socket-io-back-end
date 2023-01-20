const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server} = require('socket.io');

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
app.use(cors());
app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

const start = () => {
  try {
    server.listen(3001, () => {
      console.log(`Server listening on port 3001`);
    })
  } catch (error) {
    console.log(error);
  };
};

start();
