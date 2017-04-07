var readline = require('readline');
var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});

var input = [], 
	ads = 0; 

function adRevenue(){
	var value = 0,
		loops = input[0].length <= input[1].length ? input[0].length : input[1].length;

	console.log("Loops: ", loops);
	for(var i = 0; i < loops; i++){ 
		value += (input[0][i] * input[1][i]); 
		console.log(input[0][i], "times ", input[1][i], " equals ", input[0][i] * input[1][i], " Current value: ", value);
	}
	console.log(value);
}



rl.on('line', function (cmd) {
	cmd = cmd.split(' ');
	input.push(cmd);
});

rl.on('close', function (cmd) {
	ads = input[0][0];
	input.shift();
	console.log('starting');

	input.forEach(function(i){
		return i.sort(function(a, b){
			return (b * 1) - (a * 1);
		});
	});
	console.log(input);
	adRevenue();
	process.exit(0);
});