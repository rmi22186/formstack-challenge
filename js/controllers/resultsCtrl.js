angular.module('formstack.controllers', ['ui.bootstrap'])

.controller('FormstackCtrl', function($scope, FormstackData, $modal, $log) {
  
  //start charts
  //green, orange -- why can't i store these as rgb!?
  Chart.defaults.global.colours = ['#41AA43', '#EA9E0A'];

  $scope.phoneConversionSum = 0;
  $scope.phoneTotalsSum = 0;
  $scope.noPhoneConversionSum = 0;
  $scope.noPhoneTotalsSum = 0;

  $scope.runTest = function() {
    $scope.phoneConversionSum = FormstackData.compileTotalsData().phoneConversionSum;
    $scope.noPhoneConversionSum = FormstackData.compileTotalsData().noPhoneConversionSum;
    $scope.phoneTotalsSum = FormstackData.compileTotalsData().phoneTotalsSum;
    $scope.noPhoneTotalsSum = FormstackData.compileTotalsData().noPhoneTotalsSum;

    $scope.series = ['w/ Phone #', 'w/o Phone #'];
    $scope.labels = ['', '', '', '', ''];
    $scope.options = {
      bezierCurve:false,
      pointDotRadius: 8,
      datasetFill: false,
      scaleShowLabels: false
    };
    $scope.data = [ FormstackData.compileMonthlyData().phoneConversionRates, FormstackData.compileMonthlyData().noPhoneConversionRates ];
  };
  //end charts
  $scope.runTest();
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
  $scope.startDate;
  $scope.endDate;

  //
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
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
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