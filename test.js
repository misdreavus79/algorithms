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
	}
}
var args = process.argv.slice(2); //arguments passed from command line
args.forEach(function(element, index, array){
	console.log(tests.palindrome(element));
});

console.log(tests.hasDuplicates([1, 2, 3]));
console.log(tests.hasDuplicates([1, 1, 2, 3]));

console.log(tests.gcdEuclid(357987465738390548575674, 2349385957475859485784));
console.log(tests.wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));