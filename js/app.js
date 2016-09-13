(function(){
'use strict';
angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope){
    $scope.listOfFood = "";
    $scope.checkLunchResult = "";
    $scope.checkLunch = function(list){
      list = list.split(',').filter(str => /\S/.test(str));/*triend arrow function*/
      //list = list.split(',').filter(function(str){return /\S/.test(str)} );
      if(list.length > 3){
        tooMuch();
      } else if (list.length <= 3 && list.length != 0){
        good();
      } else{
        emptyValue();
      }
    };
    function emptyValue(){
      $scope.changeBorder = "redBorder";
      $scope.checkLunchResult = "Please enter data first";
      $scope.changeFont = "bad";
    }
    function tooMuch(){
      $scope.checkLunchResult = "Too much!"
      $scope.changeFont = "green";
      $scope.changeBorder = "greenBorder";
    }
    function good(){
      $scope.changeBorder = "greenBorder";
      $scope.checkLunchResult = "Enjoy!";
      $scope.changeFont = "good";
    }
  };
})();
//!function(){"use strict";function e(e){function n(){e.changeBorder="redBorder",e.checkLunchResult="Please enter data first",e.changeFont="bad"}function c(){e.checkLunchResult="Too much!",e.changeFont="green",e.changeBorder="greenBorder"}function t(){e.changeBorder="greenBorder",e.checkLunchResult="Enjoy!",e.changeFont="good"}e.listOfFood="",e.checkLunchResult="",e.checkLunch=function(e){e=e.split(",").filter(function(e){return/\S/.test(e)}),e.length>3?c():e.length<=3&&0!=e.length?t():n()}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
