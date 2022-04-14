//import module
const { EXIT } = require('./constants');

//mapping commands
const commands = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  z: "Say: !@#$",
  x: "Say: GG",
  c: "Say: QQ"
};

//stores the active TCP connection object
let connection;

//handleUserInput function. this is the callback for stdin.on() on line 20
const handleUserInput = function(key) {
  //'\u0003 maps to crtl+c to input. This kills the program
  if (key === EXIT) process.exit();

  //write to server
  connection.write(commands[key]);
};

//function to listen for keybod input
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();

  //implement event listener
  stdin.on('data', handleUserInput);

  return stdin;
};

//export module
module.exports = { setupInput };