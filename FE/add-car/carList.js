var app = angular.module("CarApp");
app.controller("homePage", ["$scope", "CarService", function ($scope, CarService){
 
    
    $scope.addCar = function (newCar){
        CarService.addCar(newCar);
    }
    
 
  
}])

app.controller("CarListController", ["$scope", "CarService", function ($scope, CarService){
    
    $scope.CarService = CarService;
    $scope.editing = false;
    
    CarService.getCars();
    
    
    $scope.deleteCar = function (car, index){
        CarService.deleteCar(car, index);
    }
    
    $scope.completeCar = function (car, index){
        CarService.updateCar(car, index);
    }
    
    $scope.updateCar = function(car, index){
        CarService.updateCar(car, index).then(function(){
            car.editing = false;
        })
    }
  
}]);