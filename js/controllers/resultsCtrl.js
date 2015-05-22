angular.module('formstack.controllers', ['ui.bootstrap'])

.controller('FormstackCtrl', function($scope, FormstackData, $modal, $log) {
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

  //calendar
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

  $scope.items = ['item1', 'item2', 'item3'];
  $scope.animationsEnabled = true;

  $scope.open = function (size) {
    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/modal.html',
      controller: 'FormstackCtrl',
      size: size,
      scope: $scope
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
});