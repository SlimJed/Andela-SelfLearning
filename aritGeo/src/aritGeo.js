'use strict';
var myApp = {
	aritGeo: function (arr){
		if(arr.length == 0 || arr == undefined){
			return 0;
		}else{
			var apTest1 = arr[1] - arr[0];
			var apTest2 = arr[arr.length - 1] - arr[arr.length - 2];
			var apTest3 = arr[arr.length - 2] - arr[arr.length - 3];
			var gpTest1 = arr[1] / arr[0];
			var gpTest2 = arr[arr.length - 1] / arr[arr.length -2];
			var gpTest3 = arr[arr.length - 2] / arr[arr.length -3];
			if(apTest1 == apTest2 && apTest1 == apTest3){
				return "Arithmetic";
			}else if (gpTest1 == gpTest2 && gpTest1 == gpTest3){
				return "Geometric";
			}else{
				return -1;
			}
		}
	}
}

module.exports = myApp;