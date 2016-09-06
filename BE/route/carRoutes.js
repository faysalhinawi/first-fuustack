var express = require("express");
var carRoutes = express.Router();
var Car = require("../model/car");


carRoutes.route("/")
    .get(function (req, res) {
        
        Car.find(function (err, cars) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(cars);
            }
        });
    })

.post(function (req, res) {
    var newCar = new Car(req.body);
    newCar.save(function (err, newCarObj) {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(newCarObj)
            res.send(newCarObj);
        }
    });
});

carRoutes.route("/:id")
    .get(function (req, res) {
        Car.findById(req.params.id, function (err, carObj) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(carObj);
            }
        });
    })
    
    .put(function (req, res){
        Car.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updateCar){
            if (err){
                res.status(500).send(err);
            } else {
                res.send(updateCar);
            }
        })
})

.delete(function (req, res){
    Car.findByIdAndRemove(req.params.id, function (err, deletedCar){
        if(err){
            res.status(500).send(err);
        } else {
            res.send(deletedCar);
        }
    });
});

module.exports = carRoutes;