const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  path: "/event-server",
  cors: ["http://localhost:3000/"],
});

app.use(express.static("public"));

let socketIsActive = false;

io.on("connection", (socket) => {
  console.log("User connected.");

  socket.on("disconnect", () => {
    console.log("User disconnected.");
  });

  socket.onAny((e, data) => {
    console.log("Event:", e);
    console.log("Data from event:", data);

    if (e === "control") {
      console.log("Inside control check:", e);
      console.log("Data from conttol component:", data);
      const { isDisplay } = data;
      socketIsActive = isDisplay;
    }

    if (socketIsActive) {
      socket.broadcast.emit(e, data);
    }
  });
});

const port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

