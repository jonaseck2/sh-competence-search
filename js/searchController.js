angular.module('myApp', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.persons = [
        {name:'Jani',competence:'Java'},
        {name:'Hege',competence:'Javascript'},
        {name:'Kai',competence:'Salesforce'}
    ];
});