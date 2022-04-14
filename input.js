//stores the active TCP connection object
let connection;

//handleUserInput function. this is the callback for stdin.on() on line 20
const handleUserInput = function(key) {
  //'\u0003 maps to crtl+c to input. This kills the program
  if (key === '\u0003') process.exit();

  if (key === 'w') connection.write('Move: up');   //move up with 'w'
  if (key === 'a') connection.write('Move: left'); //move left with 'a'
  if (key === 's') connection.write('Move: down'); //move down with 's'
  if (key === 'd') connection.write('Move: right');//move right with 'd'
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