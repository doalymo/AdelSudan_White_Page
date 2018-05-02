(function(){
    'use strict';
    angular
    .module('app')
    .controller('login.Controller',controller);
    controller.$inject = ['$scope','$rootScope', '$state', '$stateParams'];
    function controller ($scope, $rootScope, personService ,$state,$stateParams){
        $scope.dologin=function(loginData){
            $scope.errorMsg=false;
            loginService.login(loginData).then(function(data)
        {
            if (data.data.success){
                $state.go("persons");
            $scope.name=data.data.name;
            
            }
            else
            {
                $scope.loading=false;
                $scope.errorMsg=data.data.message;

            }
        });
        }
    }
}) ();