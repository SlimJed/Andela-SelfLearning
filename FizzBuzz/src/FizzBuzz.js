'use strict';

var myApp = {
	
	fizzBuzz: function (num){
		var answer;
		if (typeof(num)  === 'number'){
			if (num % 15 === 0){
				answer = "FizzBuzz";
			}else if(num % 3 === 0){
				answer = "Fizz";
			}else if(num % 5 === 0){
				answer = "Buzz";
			}else {
				answer = num;
			}
		}else{
			console.log("Input type must be an integer");
		}
		return answer;
	}
}

module.exports = myApp;

/*if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
{
    module.exports = fizzBuzz;
}*/

