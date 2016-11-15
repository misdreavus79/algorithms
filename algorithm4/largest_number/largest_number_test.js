var readline = require('readline');
var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});

var input = [], //numbers
	largest = 0;

function largestNumber(){
	input.sort().reverse();
	largest = input.join("");
	for(var i = 0; i < input.length; i++){
		console.log(input[i], input[i+1],isGreaterThanOrEqual(input[i], input[i + 1]));
	}
}

function isGreaterThanOrEqual(a, b) {
  return a >= b;
}

// rl.prompt();

rl.on('line', function (cmd) {
	cmd = cmd.split(' ');
	input.push(cmd);
});

rl.on('close', function (cmd) {
	input = input[1];	
	largestNumber();
	process.exit(0);
});