const server = require('http').createServer();

const INTEGER = "Integer";
const FLOAT = "Float";

function getRandomInt() {
  let min = 1;
  let max = 1000000;

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const io = require('socket.io')(server, {
  path: '/',
  serveClient: false,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

server.listen(3000);

console.log("Server started at (" + new Date() + ")!");

io.on('connection', function (socket) {
  console.log("Connected at (" + new Date() + ")!");

  socket.once("give.me.a.number", function (payload) {
    console.log("give.me.a.number at (" + new Date() + ")", payload);

    if (payload.type === INTEGER) {
      setInterval(() => {
        socket.emit('take.this.number', {
          data:
            { number: getRandomInt() }
        });
      }, 1000);
    }
  });

  socket.on('disconnect', function () {
    console.log("Disconnected at (" + new Date() + ")!");
  });
});