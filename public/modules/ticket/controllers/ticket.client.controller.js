(function() {
  var app = angular.module("app", []);

  app.controller('TicketController', function(){
    this.products = [{name:'ticket1'},{name:'ticket2'}];
    this.title = "ticket";
    this.input1 = "1"; 
    this.input2 = "2";
  });
 })();
