'use strict';

/**
 * @ngdoc function
 * @name projectSeedAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projectSeedAngularApp
 */
angular.module('projectSeedAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
