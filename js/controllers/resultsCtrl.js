angular.module('formstack.controllers', ['ui.bootstrap'])

.controller('FormstackCtrl', function($scope, FormstackData, $modal, $log) {
  
  //FEATURE 1 - click start / pause buttons
  $scope.flip = function () {
    // set start and pause buttons to variables
    var startButton = angular.element(document.querySelector('#start-button'));
    var pauseButton = angular.element(document.querySelector('#pause-button'));
    //toggle each
    startButton.toggleClass('btn-green');
    pauseButton.toggleClass('btn-green');

    //switch between 'Running' and 'Start' for startButton, and 'Pause' and 'Paused'
    if (startButton[0].classList.contains('btn-green')) {
      startButton.text('Running');
      pauseButton.text('Pause');
    } else {
      startButton.text('Start');
      pauseButton.text('Paused');
    }
  };

  //FEATURE 2 - calendar
  $scope.openStartDate = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.openedStartDate = true;
  };

  $scope.openEndDate = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.openedEndDate = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  //FEATURE 3 - create chart once both date fields are filled out
  $scope.$watchGroup(['startDate', 'endDate'], function(newValues, oldValues, scope) {
    if (newValues[0] && newValues[1]) {
      //when both values change, remove the no-data div, fill in the chart, and show the end button
      angular.element(document.querySelector('.no-data')).remove();
      $scope.getChart();
      angular.element(document.querySelector('#end-button')).removeClass('hidden');
    }
  });

  $scope.getChart = function() {
    $scope.phoneConversionSum = FormstackData.getChart().phoneConversionSum;
    $scope.noPhoneConversionSum = FormstackData.getChart().noPhoneConversionSum;
    $scope.phoneTotalsSum = FormstackData.getChart().phoneTotalsSum;
    $scope.noPhoneTotalsSum =   FormstackData.getChart().noPhoneTotalsSum;  
    $scope.series = FormstackData.getChart().series;
    $scope.labels = FormstackData.getChart().labels;
    $scope.options = FormstackData.getChart().options;
    $scope.data = FormstackData.getChart().finalConversionRate;
  };

  //FEATURE 4 - open modal with chart
  $scope.open = function () {
    var modalInstance = $modal.open({
      templateUrl: 'views/modal.html',
      controller: 'FormstackCtrl',
      scope: $scope
    });
  };
});