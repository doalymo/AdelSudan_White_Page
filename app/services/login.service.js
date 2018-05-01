(function()
{
    'use strict';
    angular
    .module ('app')
    .factory('loginService',function($http){
        var userFactory={};
        userFactory.login=function(loginData){
            return $http.post('/api/auth', loginData);

        }
        return userFactory;
    }
)
})();