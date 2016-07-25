

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// rl.prompt();

var values;

function lcmEuclid(a, b, gcd){
	var product = a * b / gcd; 
	console.log(product)
}

function gcdEuclid(a, b){
	var rem = a % b;
	if(b === 0){
		lcmEuclid(values[0], values[1], a);
	}else{
		return gcdEuclid(b, rem);
	}
}

rl.on('line', function (line) {
	values = line.split(' ');
	gcdEuclid(values[0], values[1]);
	process.exit();
});