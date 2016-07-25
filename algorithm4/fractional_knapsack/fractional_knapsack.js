var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

var input = [],
    value = 0,
    weight,
    items,
    amount;

function knapsack(){
    var a = 0;
    for(var i = 0; i < input.length; i++){ 
      // if(weight === 0){
      //   break;
      // }
      a = Math.min(input[i][0], weight);
      console.log("Math.min of ", input[i][0], " and ", weight, " is ", a);
    }

    console.log(value);
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
      console.log('starting');
      input.sort(function(a, b){
          return (a[0] / a[1]) < (b[0] / b[1]);
      });
      console.log(input);
      knapsack();
    process.exit(0);
});

//For reference: In the lesson, the instructors chose to go through the array twice and find the two largest numbers that way 
//--> refer to the C++ file for final solution