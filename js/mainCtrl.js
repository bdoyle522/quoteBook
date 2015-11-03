var app = angular.module('quoteBook');

app.controller('mainCtrl',function($scope, dataService){

	$scope.test = 'test';
	$scope.getQuotes = function(){
		$scope.quotes = dataService.getData();
	}();

	$scope.newQuote = {
		author: '',
		text: ''
	}

	$scope.add = function(){
		dataService.addData($scope.newQuote);
	};

	$scope.remove = function(quote){
		console.log(quote);
		dataService.removeData(quote);
	};

});