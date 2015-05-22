angular.module('formstackFactory', [])

.factory('FormstackData', function() {
  var phone = { conversions: [1, 3, 3, 8, 3],
                totals: [15, 40, 26, 100, 20] };
  var noPhone = { conversions: [3, 3, 2, 2, 2],
                  totals: [50, 50, 50, 60, 24] };


  var compileTotalsData = function() {
    var phoneConversionSum = phone.conversions.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);
    var phoneTotalsSum = phone.totals.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);
    var noPhoneConversionSum = noPhone.conversions.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);
    var noPhoneTotalsSum = noPhone.totals.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);

    return {
      phoneConversionSum: phoneConversionSum,
      phoneTotalsSum: phoneTotalsSum,
      noPhoneConversionSum: noPhoneConversionSum,
      noPhoneTotalsSum: noPhoneTotalsSum
    };
  };

  // creates an array of conversion rates
  var compileMonthlyData = function() {
    var phoneConversionRates = [];
    var noPhoneConversionRates = [];

    for (var i = 0; i < phone.conversions.length; i++) {
      phoneConversionRates.push((phone.conversions[i]/phone.totals[i]*100).toFixed(2));
    }
    for (var j = 0; j < noPhone.conversions.length; j++) {
      noPhoneConversionRates.push((noPhone.conversions[j]/noPhone.totals[j]*100).toFixed(2));
    }

    return {
      phoneConversionRates: phoneConversionRates,
      noPhoneConversionRates: noPhoneConversionRates
    };
  };

  return {
    compileTotalsData:compileTotalsData,
    compileMonthlyData:compileMonthlyData
  };
});