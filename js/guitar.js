var myApp = angular.module('myApp', ['ngRoute'])

myApp.controller('guitarCtrl', function($scope, $http) {

    $http.get('guitardata.json')
        .success(function(response) {

            $scope.res = response.allProducts;
            $scope.counter = 0;
            $scope.current = $scope.res[$scope.counter];
            console.log($scope.current);

            $scope.next = function() {
                $scope.counter++;
                $scope.current = $scope.res[$scope.counter];
                console.log($scope.counter);
                console.log($scope.current);
            };
            $scope.previous = function() {
                $scope.counter--;
                $scope.current = $scope.res[$scope.counter];
                console.log($scope.counter);
                console.log($scope.current);
            };
        });
});
/*myApp.controller('orderCtrl', function($scope, $http) {

    $http.get('guitardata.json')
        .success(function(response) {

            $scope.res = response.allProducts;
            $scope.counter = 0;
            $scope.current = $scope.res[$scope.counter];
            console.log($scope.current);

        });
});
*/
myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/guitar.html',
            controller: 'guitarCtrl'
        })
        /*.when('/order', {
            templateUrl: 'Templates/order.html',
            controller: 'orderCtrl'
        })*/
        /*.when('/Confirmation', {
        templateUrl: 'Confirmation.html',
        controller: 'StudentController'
    })
*/
});
