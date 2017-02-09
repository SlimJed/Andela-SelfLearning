'use strict';

var myApp = {
	findMinMax: function (arr){
		var newArray = [];
		arr.sort(function(a, b){return a-b});
		var max = arr[arr.length - 1];
		var min = arr[0];
		min == max ? newArray = [max] : newArray = [min, max];
		return newArray;
	}
}

module.exports = myApp;