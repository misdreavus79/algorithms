var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// rl.prompt();

//set up parameters to figure out denominaitons and total
var coins = [1, 5, 10],
	combinations = [0, 0, 0];

function change(bill){
	var last = coins.length - 1, //last element of array
		total = 0;
	if(bill % coins[last] === 0){ //if total fits into last element,

		combinations[last] = bill / coins[last]; //slot the factor between bill and last element

		for(var i = 0; i < combinations.length; i++){
			total += combinations[i]; //add up all the totals
		}
	}else{ //if total doesn't fit into the last element,

		total = Math.floor(bill / coins[last]); //divide bill into the last element and get rid of the decimal
		
		combinations[last] = total; //update the combinations to reflect the combinations
		
		bill = bill % coins[last]; //pass the remainder to the function

		coins.pop(); //remove the last element in coins, which we just used
		
		return change(bill);
	}
	console.log(total);
}

rl.on('line', function (line) {
	var values = line.split(' ');
	change(values[0]); //send the first number as the argument
	process.exit();
});