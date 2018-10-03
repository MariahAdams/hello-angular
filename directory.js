angular.module('directoryApp', [])
  .controller('directoryController', function() {

    let dirList = this;

    dirList.list = [
      {name: 'Emma', age: 26},
      {name: 'Evelyn', age: 0},
      {name: 'John', age: 31},
      {name: 'Alex', age: 29},
      {name: 'Ross', age: 32}
    ];

    dirList.addPerson = function() {
      dirList.list.push({name: dirList.name, age: dirList.age});
      dirList.name = '';
      dirList.age = 0;
    };
  }); 