var app = angular.module('myApp', [
    "ngRoute",
    "mobile-angular-ui"
]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });
    // ...
});