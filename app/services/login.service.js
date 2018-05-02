(function()
{
    'use strict';
    angular
    .module ('app')
    .factory('loginService',function($http){
        var personFactory={};
        personFactory.login=function(loginData){
            return $http.post('/api/auth', loginData);

        }
        return personFactory;
    }
)
})();