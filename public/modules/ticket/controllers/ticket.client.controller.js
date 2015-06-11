(function() {
  var app = angular.module("app", ['ngAnimate', 'ui.router']);

  app.controller('TicketController', function(){
    this.products = [{name:'ticket1'},{name:'ticket2'}];
    this.title = "ticket";
    this.input1 = "1"; 
    this.input2 = "2";
  });
  
  
  app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        //  /formcontainer 
        .state('ticket', {
            url: '/ticket',
            templateUrl: './views/formcontainer.html',
            controller: 'formController'
        })
        
  
        //  /tickets/choose 
        .state('ticket.choose', {
            url: '/choose',
            templateUrl: './views/form-choose.html'
        })
        
        // url will be /form/interests
        .state('ticket.confirm', {
            url: '/confirm',
            templateUrl: './views/form-confirm.html'
        })
        
        // url will be /form/payment
        .state('ticket.payment', {
            url: '/payment',
            templateUrl: './views/form-payment.html'
        });
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/ticket');
})

// our controller for the form
// =============================================================================
app.controller('formController', function($scope) {
    
    // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
    
});

  
  
 })();
