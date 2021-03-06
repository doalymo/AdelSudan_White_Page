(function() {
    'use strict';
    
    angular
    .module('app')
    .controller('person.Controller', Controller);
    
    Controller.$inject = ['$scope', '$rootScope', 'personService', '$state', '$stateParams'];
    
    function Controller($scope, $rootScope, personService, $state, $stateParams) {
    $scope.persons = [];
    
    if ($state.current.name == "persons") {
    $rootScope.Title = "person Listing";
    personService.getPersons().then(function(res) {
    $scope.persons = res.data;
    }).catch(function(err) {
    console.log(err);
    });
    
    $scope.deletePerson = function(id) {
    if (confirm('Are you sure to delete?')) {
     personService.deletePerson(id).then(function(res) {
    if (res.data == "deleted") {
    $state.go("persons", {}, { reload: true });
    }
    }).catch(function(err) {
    console.log(err);
    });
}
};

    $scope.saveData = function(person) {
        $scope.IsSubmit = true;
        if ($scope.personForm.$valid) {
            personService.createPerson(person).then(function(res) {
        if (res.data == "created") {
            $state.go("persons", {}, { reload: true });
        }
        }).catch(function(err) {
        console.log(err);
        });

        personService.updatePerson(person).then(function(res) {
            if (res.data == "updated") {
                $state.go("persons", {}, { reload: true });
            }
            }).catch(function(err) {
            console.log(err);
            });
        }
        };
    
        $scope.getForEdit=function(id){
            personService.getPerson(id).then(function(res) {
                $scope.person = res.data;
                }).catch(function(err) {
                console.log(err);
                });
        };

    
    } 
    }
   })();