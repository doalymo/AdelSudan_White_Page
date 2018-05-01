(function(){
    'use strict';
    angular
    .module('app')
    .controller('user.controller',controller);
    controller.$inject = ['$scope','$rootScope', '$state', '$stateParams'];
    function controller ($scope, $rootScope, userService ,$state,$stateParams){
        $scope.dologin=function(loginData){
            $scope.errorMsg=false;
            userService.login(loginData).then(function(data)
        {
            if (data.data.success){
                $state.go("persons");
            $scope.userName=data.data.userName;
            
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