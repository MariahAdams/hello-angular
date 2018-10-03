angular.module('directoryApp', [])
  .controller('directoryController', function($scope) {
    $scope.list = [
      {name: 'Emma', age: 26},
      {name: 'Evelyn', age: 0},
      {name: 'John', age: 31},
      {name: 'Alex', age: 29},
      {name: 'Ross', age: 32}
    ];

    $scope.addPerson = function() {
      $scope.list.push({name: $scope.name, age: $scope.age});
      $scope.name = '';
      $scope.age = 0;
    };
  });