var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
    var fib = [0, 1], i;
    if(line <= 1){
      console.log(line);
    }else{
      for(i = 2; i <= line; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
      }
      console.log(fib[line]);
    }
    process.exit();
});