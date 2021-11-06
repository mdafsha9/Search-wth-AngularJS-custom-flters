// var app = angular.module("myApp", []);
// app.controller("myCtrl", function($scope, $http){
//   $http.get("api/employee.json")
//   .then(function(response){
//     $scope.myDatas =  response.data;
//   });
// });


var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
  $http.get("api/employee.json")
  .then(function(response){
    $scope.myInfs = response.data;
  });
} );
