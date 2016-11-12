var readline = require('readline');
var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	}); 

var nums = [],
	current = 1;

function summands(candy){
	if(candy <= (2 * current)){
		nums.push(candy);
		output = nums.join(' ');
		console.log(nums.length);
		console.log(output);
		return;
	}
	nums.push(current);
	candy = candy - current;
	current += 1;
	return summands(candy);
}



rl.on('line', function (cmd) {
	summands(cmd);
	process.exit(0);
});