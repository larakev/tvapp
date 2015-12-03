angular.module('tvmaze', [])

.factory('tvmazeFactory', function($http, $q){
	return {
		get: function(){
			defer = $q.defer();

			$http.get('http://api.tvmaze.com/shows')
				.success(function(data){
					defer.resolve(data);
				})
				
			return defer.promise;
		}
	}
})

.controller('tvmazeController', function($scope, tvmazeFactory){
	
	tvmazeFactory.get().then(
		function(data){
			$scope.tvmazes = data;	
		}
	)
	
})


// if ( $("#shows").length !=  0 ) {
//  	$('#carga').hide();
// }


setTimeout(function() {
    $('#carga').fadeOut('fast');
}, 4500);