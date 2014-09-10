'use strict';

/**
 * @ngdoc function
 * @name projectSeedAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectSeedAngularApp
 */
angular.module('projectSeedAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
