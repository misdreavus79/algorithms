var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var input = [];

// rl.prompt();

rl.on('line', function (cmd) {
    input.push(cmd);
});

rl.on('close', function (cmd) {
	var n = input[0],
    	a = input[1].split(/\s/g).sort(function(a, b){
    		return parseInt(a) - parseInt(b);
    	}),
    	max = 0,
    	i = n - 1,
    	j = n - 2;
    max = a[i] * a[j];
    console.log(max);
    process.exit(0);
});

//For reference: In the lesson, the instructors chose to go through the array twice and find the two largest numbers that way 
//--> refer to the C++ file for final solution