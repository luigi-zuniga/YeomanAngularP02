'use strict';
/**
 * @ngdoc function
 * @name luigiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the luigiApp
 */
angular.module('luigiApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var tareasEnAlmacen = localStorageService.get('tareas');
    $scope.tareas = tareasEnAlmacen && tareasEnAlmacen.split('\n') || [];
    $scope.$watch('tareas',function(){
      localStorageService.add('tareas',$scope.tareas.join('\n'));
    },true);
    //$scope.tareas = [];
    //añadir tareas
    $scope.addTareas = function(){
      $scope.tareas.push($scope.tarea);
      $scope.tarea = '';
    };  

    //Eliminar Tareas
    $scope.eliminarTarea = function(index){
      $scope.tareas.splice(index, 1);
    };
});

