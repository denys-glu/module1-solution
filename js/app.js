// (function(){
// 'use strict';
// angular.module('LunchCheck',[])
//   .controller('LunchCheckController', LunchCheckController);
// LunchCheckController.$inject = ['$scope'];
//   function LunchCheckController ($scope){
//     $scope.listOfFood = "";
//     $scope.checkLunchResult = "";
//     $scope.checkLunch = function(list){
//       list = list.split(',').filter(str => /\S/.test(str));/*triend arrow function*/
//       //list = list.split(',').filter(function(str){return /\S/.test(str)} );
//       if(list.length > 3){
//         $scope.checkLunchResult = "Too much!"
//         $scope.changeFont = "bad";
//       } else {
//         $scope.checkLunchResult = "Enjoy!"
//         $scope.changeFont = "good";
//       }
//       if($scope.listOfFood != ""){
//         $scope.changeBorder = "greenBorder";
//       } else {
//         $scope.changeBorder = "redBorder";
//         $scope.checkLunchResult = "";
//       }
//     };
//   };
// })();
!function(){"use strict";function c(c){c.listOfFood="a, ,,b, ,,c, ,,",c.checkLunchResult="",c.checkLunch=function(e){e=e.split(",").filter(function(c){return/\S/.test(c)}),e.length>3?(c.checkLunchResult="Too much!",c.changeFont="bad"):(c.checkLunchResult="Enjoy!",c.changeFont="good"),""!=c.listOfFood?c.changeBorder="greenBorder":(c.changeBorder="redBorder",c.checkLunchResult="")}}angular.module("LunchCheck",[]).controller("LunchCheckController",c),c.$inject=["$scope"]}();
