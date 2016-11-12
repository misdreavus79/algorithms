var readline = require('readline');
var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});

var input = [];

function adRevenue(){
	var value = 0,
	loops = input[0].length <= input[1].length ? input[0].length : input[1].length;
	for(var i = 0; i < loops; i++){ 
		value += (input[0][i] * input[1][i]); 
	}
	console.log(value);
}

rl.on('line', function (cmd) {
	cmd = cmd.split(' ');
	input.push(cmd);
});

rl.on('close', function (cmd) {
	input.shift();
	input.forEach(function(i){
		return i.sort(function(a, b){
			return (b * 1) - (a * 1);
		});
	});
	adRevenue();
	process.exit(0);
});