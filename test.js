var tests = {
	palindrome : function(string){
		var reversed = string.split('').reverse().join(''), testResult;
		if(reversed === string){
			testResult = string + " is a palindrome";
		}else{
			testResult = string + " is not a palindrome";
		}

		return testResult;
	},
	hasDuplicates : function(arr){ //redo this to make it simpler
		var temp = {}, i, result = false;
		for(i = 0; i < arr.length; i++){
			if(temp.hasOwnProperty(arr[i])){
				result = true;
				break; 
			}else{
				temp[arr[i]] = arr[i];
			}		
		}
		return result;
	},
	meetingTimes : function(meetings){ //revisit this later
		//1) Times are not in order
		//2) Times intersect without matching
		var temp = [];
		meetings = meetings.sort();
		for (var i = 0; i < meetings.length; i++){
			if(meetings[i][1] === meetings[i + 1][0] || meetings[i][1] > meetings[i + 1][0]){
				temp[i][0] = meetings[i][0];
				temp[i][1] = meetings[i + 1][1];
			}else{
				temp[i] = meetings[i];
			}
		}
	},
	gcdEuclid : function(a, b){ 
		/*
		hint: for algorithms, in order to find the proper algorithm, you need to know something interesting about the problem.
		"Very often, in order to find a better algorithm for a problem, you need to understand something 
		interesting about the structure of the solution, and that will allow you to simplify things a lot."
		*/
		var rem = a % b;
		console.log(rem);
		if(b === 0){
			return a;
		}else{
			return this.gcdEuclid(b, rem);
		}
	},
	wordLadder : function (beginWord, endWord, wordList) {
		var final = [beginWord, endWord];
		for(var i = 0; i < wordList.length; i++){
			console.log(i +':', beginWord, endWord, wordList[i]);
			if(beginWord === endWord){
				break;
			}else{
				for(var j = 0; j < endWord.length; j++){
					console.log(wordList[i].charAt(j), endWord.charAt(j), wordList[i].charAt(j) === endWord.charAt(j));
					if(wordList[i].charAt(i) === endWord.charAt(j)){
						beginWord = wordList[i];
						final.push(wordList[i]);
						break;
					}
				}
			}
		}
		return final;
	},
	squareDigits : function (num){
		//may the code be with you
		let arr = num.toString().split('');
		console.log(arr);
		let squared = arr.map(function(el){
			console.log(el, el*el);
		return el*el;
		});
		console.log(squared);
		let single = squared.join('');
		single = parseInt(single);
		return single;
	},

	nbYear : function (p0, percent, aug, p) {
		//convert percent to decimal
		let dec = percent / 100,
			years = 0;

		while(p0 < p){
			p0 = p0 * dec + p0 + aug;
			years++;
		}

		return years;
	},

	printerError : function (s) {
		let arr = s.split(''),
		count = 0;

		for(let i = 0; i < arr.length; i++){
			if(!/[a-m]/.test(arr[i])){
				count++;
			}
		}

		return count + '/' + arr.length;
	},

	digital_root : function (n) {
		if(n <= 9){
			return n;
		}

		let newNum = n.toString().split('').map(Number).reduce((a, b) => a + b);

		return digital_root(newNum);
	},

	countItems : function (arr, item) {
		// Write the code that goes here
		let newArray = arr.filter(function(el){
			return el === item;
		});
		return newArray;
	}
}
var args = process.argv.slice(2); //arguments passed from command line
args.forEach(function(element, index, array){
	console.log(tests.palindrome(element));
});

var arr = [
  "apple",
  ["banana", "strawberry", "apple"],
  "apple",
  ["apple", "apple", "cherry"]
];
console.log(tests.countItems(arr, "apple"));

console.log(tests.hasDuplicates([1, 2, 3]));
console.log(tests.hasDuplicates([1, 1, 2, 3]));

console.log(tests.gcdEuclid(357987465738390548575674, 2349385957475859485784));
console.log(tests.wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));