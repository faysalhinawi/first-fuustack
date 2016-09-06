var app = angular.module("CarApp");

app.service("CarService", ["$http", function($http){
    var self = this;
    this.carList = [];
    
    this.getCars = function(){
        return $http.get("/world-of-the-car").then(function(response){
            self.carList = response.data;
            return response.data;
        });
    };
    this.addCar = function (newCar){
        return $http.post("/world-of-the-car", newCar).then(function(response){
            self.carList.push(response.data);
        });
    };
    
    this.deleteCar = function (car, index){
        return $http.delete("/world-of-the-car/" + car._id).then(function(response){
            self.carList.splice(index, 1);
        });
    };
    
    this.updateCar = function(car, index){
        return $http.put("/world-of-the-car/" + car._id, car).then(function(response){
            self.carList[index] = response.data;
        });
    };
    
    
}]);