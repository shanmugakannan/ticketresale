angular.module("app").factory('ticketRepository', ['$http',function($http,$scope) {
    return {
        get : function() {
$scope={}
			$http.get('/ticket/get').
			success(function(data) {
				$scope.tickets = data;
				$scope.message = 'asdasd';
			}).
		error(function(err) {
				$scope.tickets = err;
				$scope.message = 'err';
		});
        }
    }       
}]);