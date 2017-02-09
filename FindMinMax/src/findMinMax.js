'use strict';

var myApp = {
	findMinMax: function (arr){
		if (arr.length == 0 || arr == undefined){
			return "Array should contain data";
		}else{
			var newArray = [];
			arr.sort(function(a, b){return a-b});
			var max = arr[arr.length - 1];
			var min = arr[0];
			min == max ? newArray = [max] : newArray = [min, max];
			return newArray;
		}		
	}
}

module.exports = myApp;