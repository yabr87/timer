const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

let isForwardMessages = 'true';
io.on('connection', (socket) => {
  console.log('User connected.');

  socket.on('disconnect', () => {
    console.log('User disconnected.');
  });

  socket.onAny((e, msg) => {
    // console.log(`${isForwardMessages} -> ${e}: ${msg}`);

    if (isForwardMessages === 'true') {
      socket.broadcast.emit(e, msg);
    }

    if (e == 'control') {
      isForwardMessages = msg;
    }
  });
});

const port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
