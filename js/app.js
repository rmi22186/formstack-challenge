angular.module('formstackApp',['ui.router', 'ui.bootstrap', 'formstack.controllers', 'chart.js', 'formstackFactory'])

//make calculations on front end have only 2 decimal points in % form

.config(function($stateProvider, $urlRouterProvider, datepickerConfig) {
  datepickerConfig.showWeeks = false;

  $urlRouterProvider.otherwise('/results');

  $stateProvider
    .state('results', {
      url: '/results',
      templateUrl: '../views/results.html',
      controller: 'FormstackCtrl'
    });
})

.filter('percent', function($filter) {
  return function(input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
});