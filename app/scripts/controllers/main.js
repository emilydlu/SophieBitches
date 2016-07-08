'use strict';

/**
 * @ngdoc function
 * @name sophieBitchesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sophieBitchesApp
 */

angular.module('sophieBitchesApp')
.controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;

   this.fuckingDelight = function() {
   	var formation = document.getElementById("fuckingDelight");
   	if (formation.paused == true){
   		formation.play();
   	} else {
   		formation.pause();
   	}
  };

  this.icedChai = function(){
  var icedChai = document.getElementById("icedChai");
   	if (icedChai.paused == true){
   		icedChai.play();
   	} else {
   		icedChai.pause();
   	}
  };

  this.dasSoMean = function(){
  var dasSomean = document.getElementById("dasSomean");
   	if (dasSomean.paused == true){
   		dasSomean.play();
   	} else {
   		dasSomean.pause();
   	}
  };
   
   this.tempurpedic = function(){
  var tempurpedic = document.getElementById("tempurpedic");
   	if (tempurpedic.paused == true){
   		tempurpedic.play();
   	} else {
   		tempurpedic.pause();
   	}
  };
   
   this.parks = function(){
  var parks = document.getElementById("parks");
   	if (parks.paused == true){
   		parks.play();
   	} else {
   		parks.pause();
   	}
  };
   
   this.canUNot = function(){
  var canUNot = document.getElementById("canUNot");
   	if (canUNot.paused == true){
   		canUNot.play();
   	} else {
   		canUNot.pause();
   	}
  };
  });


