const myApp = angular.module('myApp');

myApp.controller('BookContoller', ['$scope', '$http', '$location', '$routeParams',($scope, $http, $location, $routeParams) => {
    console.log("Books controller loaded.. ")
    $scope.getBooks = () => {
        $http.get('/api/books')
            .then(function(response) {
            $scope.books = response.data
        })
    }
}]); 