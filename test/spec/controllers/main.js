'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('luigiApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //expect(MainCtrl.awesomeThings.length).toBe(3);
  //});

  it('no debe tener items al empezar', function () {
    expect(scope.todos.length).toBe(0);
  });

0
  it('debe añadir items a la lista', function () {
    scope.tarea = 'Test 1';
    scope.addTareas();
    expect(scope.tareas.length).toBe(1);
  });

  it('debe añadir y luego eliminar un item de la lista', function () {
    scope.tarea = 'Test 1';
    scope.addTareas();
    scope.eliminarTarea(0);
    expect(scope.tareas.length).toBe(0);
  });
});
