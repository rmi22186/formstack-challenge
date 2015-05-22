angular.module('formstackApp',['ui.router', 'ui.bootstrap', 'formstack.controllers', 'chart.js', 'formstackFactory'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/results');

  $stateProvider
    .state('results', {
      url: '/results',
      templateUrl: '../views/results.html',
      controller: 'FormstackCtrl'
    });
});