// (function(){
// 'use strict';
// angular.module('LunchCheck',[])
//   .controller('LunchCheckController', LunchCheckController);
// LunchCheckController.$inject = ['$scope'];
//   function LunchCheckController ($scope){
//     $scope.listOfFood = "";
//     $scope.checkLunchResult = "";
//     $scope.checkLunch = function(list){
//       //list = list.split(',').filter(str => /\S/.test(str));/*triend arrow function*/
//       list = list.split(',').filter(function(str){return /\S/.test(str)} );
//       console.log(list.length);
//       if(list.length > 3){
//         tooMuch();
//       } else if (list.length <= 3 && list.length != 0){
//         good();
//       } else{
//         emptyValue();
//       }
//     };
//     function emptyValue(){
//       $scope.changeBorder = "redBorder";
//       $scope.checkLunchResult = "Please enter data first";
//       $scope.changeFont = "";
//       console.log("emptyValue")
//     }
//     function tooMuch(){
//       $scope.checkLunchResult = "Too much!"
//       $scope.changeFont = "bad";
//       console.log("tooMuch");
//     }
//     function good(){
//       $scope.changeBorder = "greenBorder";
//       $scope.checkLunchResult = "Enjoy!";
//       $scope.changeFont = "good";
//       console.log("good");
//     }
//   };
// })();
!function(){"use strict";function e(e){function n(){e.changeBorder="redBorder",e.checkLunchResult="Please enter data first",e.changeFont="",console.log("emptyValue")}function o(){e.checkLunchResult="Too much!",e.changeFont="bad",console.log("tooMuch")}function c(){e.changeBorder="greenBorder",e.checkLunchResult="Enjoy!",e.changeFont="good",console.log("good")}e.listOfFood="",e.checkLunchResult="",e.checkLunch=function(e){e=e.split(",").filter(function(e){return/\S/.test(e)}),console.log(e.length),e.length>3?o():e.length<=3&&0!=e.length?c():n()}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
