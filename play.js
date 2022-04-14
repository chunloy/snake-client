//import module
const { connect } = require('./client');
const { setupInput } = require('./input');

//connect to server
console.log("Connecting ...");
// connect();

//start listening for input
setupInput(connect());