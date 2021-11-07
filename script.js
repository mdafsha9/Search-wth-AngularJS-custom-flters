//for get method

var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
  $http.get("api/employee.json")
  .then(function(response){
    $scope.myInfs = response.data;
  });
} );

//for post method
var appp = angular.module("myAppPost", []);
appp.controller("myCtrlPost", function($scope, $http){
  $scope.name = null;
  $scope.country = null;
  $scope.price = null;
  $scope.postdata = function(name, country, price){
    var data = {
      name:name,
      country:country,
      price:price
    };
    $http.post("C:\Users\AR\filters\api\employee.json", JSON.stringify(data))
    .then(function(response){
        if(response.data){
            $scope.msg = " Post data submtted successfully!";
            $scope.Name = response.data.name;
            $scope.Country = response.data.country;
            $scope.Price = response.data.price;
        };
    }, function(response){
      $scope.msg="Service not Exists";
    });
  };
});
