(function() {
  var app = angular.module("app", ['ngAnimate', 'ngRoute']);

  app.config(function($routeProvider) {
		$routeProvider
			// route for the tickets page
			.when('/', {
				templateUrl : '../views/choose.html',
				controller  : 'ticketController'
			})

			// route for the ticket details page
			.when('/confirm', {
				templateUrl : './views/confirm.html',
				controller  : 'detailsController'
			})

			// route for the payment page
			.when('/pay', {
				templateUrl : '../views/pay.html',
				controller  : 'paymentController'
			});
			
	});
	
 

app.controller('ticketController', function($scope) {
	    $scope.message = 'Select your movie';
		$scope.count='1';
		$scope.bookTicket = function() {
        $scope.selectedMovie='Bahubali';
		}
	});
	
app.controller('paymentController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Pay Here';
	});
	
app.controller('detailsController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Details';
	});
  
  
 })();

	
 

	
