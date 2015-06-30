angular.module("app").factory('ticketRepository', ['$http',function($http) {
    var tickets = [];
	$http.get('/ticket/get').
			success(function(data) {
		    data.forEach(function (ticket) {
            tickets.push(ticket);
        });
			}).
		error(function(err) {
				 
		});
	
	return {
        tickets: tickets
    };      
}]);