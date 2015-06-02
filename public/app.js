(function() {
  var app = angular.module("app", []);

  app.controller('MainController', function(){
    this.products = [{name:'ticket1'},{name:'ticket2'}];
    this.title = "ticket";
  });
 })();
