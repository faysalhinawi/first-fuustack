var app = angular.module('CarApp');
app.controller('HomeController', ["$scope", function ($scope) {

            $scope.myInterval = 2000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            var slides = $scope.slides = [];
            var currIndex = 0;

            $scope.addSlide = function () {
                var newWidth = 600 + slides.length + 1;

                console.log(arguments);
                if (arguments.length > 0) {
                    for (var i = 0; i < arguments.length; i++) {
                        slides.push({
                            image: arguments[i],
                            text: ['The city has evolved.So has its EDGE.', 'A truck that’s lighter, yet stronger.', 'Built to take on your world', 'I love that'][slides.length % 4],
                            id: currIndex++
                        })
                    }
                }
                };

                $scope.randomize = function () {
                    var indexes = generateIndexesArray();
                    assignNewIndexesToSlides(indexes);
                };

                $scope.addSlide("home-page/FordEdge-09-970-80.jpg", "home-page/01-2017-ford-f150-raptor-detroit.jpg", "home-page/car4.jpg")

            }]);