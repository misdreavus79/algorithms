var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// rl.prompt();

var coins = [1, 5, 10],
	combinations = [0, 0, 0];

function change(bill){
	var last = coins.length - 1,
		total = 0;
	if(bill % coins[last] === 0){
		combinations[last] = bill / coins[last];
		for(var i = 0; i < combinations.length; i++){
			total += combinations[i];
		}
	}else{
		total = Math.floor(bill / coins[last]);
		combinations[last] = total;
		bill = bill % coins[last];
		coins.pop();
		return change(bill);
	}
	console.log(total);
}

rl.on('line', function (line) {
	var values = line.split(' ');
	change(values[0]);
	process.exit();
});