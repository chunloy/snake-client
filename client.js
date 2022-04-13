//import module
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //read data from server
  conn.on('data', (messageFromServer) => {
    console.log('Server says:', messageFromServer);

  });

  //write print to terminal when connection event occurs
  //handler means callback!
  conn.on('connect', () => {
    //write print to terminal when connection event occurs
    console.log('Successfully connected to game server.');

    //write name to server when connection established
    conn.write("Name: ARN");
  });

  //move commands
  // conn.on('connect', () => {
  //   const commands = ["Move: left", "Move: left", "Move: left", "Move: left", "Move: left", "Move: left", "Move: left", "Move: left",
  //     "Move: up", "Move: up", "Move: up", "Move: up", "Move: up", "Move: up", "Move: up", "Move: up", "Move: up", "Move: up", "Move: up", "Move: up",
  //     "Move: right", "Move: right", "Move: right", "Move: right", "Move: right", "Move: right", "Move: up", "Move: up",
  //     "Move: left", "Move: left", "Move: left", "Move: left", "Move: down", "Move: down", "Move: down", "Move: down", "Move: down", "Move: down"];
  //   let delay = 0;

  //   //delay each command by an additional 125ms
  //   for (const command of commands) {
  //     setTimeout(() => {
  //       conn.write(command);
  //     }, delay += 125);
  //   }
  // });

  return conn;
};

//export module
module.exports = { connect };