

(function() {

    
    'use strict';
    
    angular.module('app', [
    "ui.router"
    ])
    .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    
    $stateProvider.state("persons", {
    url: "/index",
    templateUrl: "/views/person/index.html",
    controller: "person.Controller"
    })
    .state("create", {
    url: "/index",
    templateUrl: "/views/person/index.html",
    controller: "person.Controller"
    }) 
    .state("login", {
        url: "/",
        templateUrl: "/views/login/login.html",
        controller: "person.Controller"
        })
    .state("edit", {
    url: "/edit/:id",
    templateUrl: "/views/person/index.html",
    controller: "person.Controller"
    })
    .state("details", {
    url: "/details/:id",
    templateUrl: "/views/person/details.html",
    controller: "person.Controller"
    });
    })
    .constant("globalConfig", {
    apiAddress: 'http://localhost:3000/api'
    });
   })();