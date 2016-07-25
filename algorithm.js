var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
    var values = line.split(' '),
    	a = values[0],
    	b = values[1];
    a = parseInt(a);
    b = parseInt(b);
    //console.log(typeof a, typeof b);
    console.log(a + b);
    process.exit();
})