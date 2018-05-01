(function()
{
    'use strict';
    angular
    .module ('app')
    .factory('userService',function($http){
        var userFactory={};
        userFactory.login=function(loginData){
            return $http.post('/api/auth', loginData);

        }
        return userFactory;
    }
)
})();