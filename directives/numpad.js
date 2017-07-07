angular.module("firstApp")
	.directive("numPad", function(){
		return {
			restrict: "E",
			template: '<div class="row"><div class="col-md-4"><h2>{{firstname}}</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p><p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p></div><div class="col-md-4"><h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p><p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p></div><div class="col-md-4"><h2>Heading</h2><p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p><p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p></div></div>',
			link: function(scope, elem, attrs){
				scope.firstname = attrs.name
			}
		}
	})

