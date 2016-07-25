var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// rl.prompt();

function gcdEuclid(a, b){
	var rem = a % b;
	if(b === 0){
		console.log(a);
	}else{
		return gcdEuclid(b, rem);
	}
}

rl.on('line', function (line) {
	var values = line.split(' ');
	gcdEuclid(values[0], values[1]);
	process.exit();
});