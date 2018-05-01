(function() {
    'use strict';
    
    angular
    .module('app')
    .factory('personService', Service);
    
    Service.$inject = ['$http', 'globalConfig'];
    
    function Service($http, globalConfig) {
    var url = "";
    return {
    getPersons: function() {
    url = globalConfig.apiAddress + "/person";
    return $http.get(url);
    },
    getPerson: function(id) {
    url = globalConfig.apiAddress + "/person/" + id;
    return $http.get(url);
    },
    createPerson: function(person) {
    url = globalConfig.apiAddress + "/person";
    return $http.post(url, person);
    },
    updatePerson: function(person) {
    url = globalConfig.apiAddress + "/person/" + person._id;
    return $http.put(url, person);
    },
    deletePerson: function(id) {
    url = globalConfig.apiAddress + "/person/" + id;
    return $http.delete(url);
    }
    };
    }
   })();