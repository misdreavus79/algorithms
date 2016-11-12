var readline = require('readline');
var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		terminal: false
	});

var input = [], //items
	value = 0, //total value
	weight, //weight of the bag
	items, //number of items
	amount; 

function knapsack(){
	for(var i = 0; i < input.length; i++){ 
		
		if(weight === 0){
			
			break;
		}
		input[i][1] = input[i][1] * 1;
		if(input[i][1] > weight){
			amount = (weight / input[i][1]);
			
			value += round((amount * input[i][0]), 4);
			
			weight = 0;
		}else{
			
			amount = round(input[i][0], 4);
			
			weight -= input[i][1];
			
			value += amount;
			
		}
	}

	console.log(value);
}

function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}

// rl.prompt();

rl.on('line', function (cmd) {
	cmd = cmd.split(' ');
	input.push(cmd);
});

rl.on('close', function (cmd) {
	weight = input[0][1];
	items = input[0][0];
	input.shift();
	
	input.sort(function(a, b){
		return (b[0] / b[1]) - (a[0] / a[1]);
	});
	knapsack();
	process.exit(0);
});

//For reference: In the lesson, the instructors chose to go through the array twice and find the two largest numbers that way 
//--> refer to the C++ file for final solution