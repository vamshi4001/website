angular.module("firstApp")
	.service("userService", userService);

	function userService(){
		this.sum = 10000;
		this.formatCurrency = function(value){
			return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
		}
		this.formatDate = function(value){
			return this.formatCurrency(value);
		}
	}


	// Class Vehicle{
	// 	this.horn = true;
	// 	this.brake = true;
	// 	this.getMileage = function(){
	// 		return "25mph";
	// 	}
	// 	this.getEmission = function(){
	// 		return "30ppi";
	// 	}
	// }
	// var bmw = new Vehicle;
	// var audi = new Vehicle;


	// bmw = 10kb
	// audi = 10kb