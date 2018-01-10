const myApp = angular.module('myApp', ['ng-route']);

myApp.config(($routeProvider) =>{
        $routeProvider.when('/',{
            controller: 'BooksController',
            templateUrl: 'views/books.html'
        })
        .when('/books', {
            controller:'BooksController',
            templateUrl: 'views/books.html'
        })
        .when('/books/details/:id', {
            controller: 'BooksController',
            templateUrl: 'views/bookDetails.html'
        })
        .when('/books/add', {
            controller: 'BooksController',
            templateUrl:'views/addBook.html'
        })
        .when('/book/edit/:id', {
            controller: 'BookController',
            templateUrl:'views/editBook.html'
        })
        .otherwise({
            redirectTo: '/'
        })
})