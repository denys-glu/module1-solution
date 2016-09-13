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
//       $scope.changeFont = "bad";
//     }
//     function tooMuch(){
//       $scope.checkLunchResult = "Too much!"
//       $scope.changeFont = "bad";
//     }
//     function good(){
//       $scope.changeBorder = "greenBorder";
//       $scope.checkLunchResult = "Enjoy!";
//       $scope.changeFont = "good";
//     }
//   };
// })();
!function(){"use strict";function n(n){function e(){n.changeBorder="redBorder",n.checkLunchResult="Please enter data first",n.changeFont="bad"}function c(){n.checkLunchResult="Too much!",n.changeFont="bad"}function t(){n.changeBorder="greenBorder",n.checkLunchResult="Enjoy!",n.changeFont="good"}n.listOfFood="",n.checkLunchResult="",n.checkLunch=function(n){n=n.split(",").filter(function(n){return/\S/.test(n)}),n.length>3?c():n.length<=3&&0!=n.length?t():e()}}angular.module("LunchCheck",[]).controller("LunchCheckController",n),n.$inject=["$scope"]}();
