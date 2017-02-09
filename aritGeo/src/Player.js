function aritGeo(arr){
	if(arr.length == 0 || arr == undefined){
		return 0;
	}else{
		var test1 = arr[1] - arr[0];
		var test2 = arr[arr.length - 1] - arr[arr.length - 2];
		var test3 = arr[1] / arr[0];
		var test4 = arr[arr.length - 1] / arr[arr.length -2];
		if(test1 == test2){
			return "Arithmetic";
		}else if (test3 == test4){
			return "Geometric";
		}else{
			return -1;
		}
	}
}