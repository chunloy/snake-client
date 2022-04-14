//handleUserInput function. this is the callback for stdin.on() on line 20
const handleUserInput = function(key) {
  //'\u0003 maps to crtl+c to input. This kills the program
  if (key === '\u0003') process.exit();
};

//function to listen for keybod input
const setupInput = function() {
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