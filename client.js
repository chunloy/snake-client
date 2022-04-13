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
  })

  return conn;
};

//export module
module.exports = { connect };