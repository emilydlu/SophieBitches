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

  vm.fuckingDelight = function() {
    var fuckingDelight = document.getElementById('fuckingDelight');
    playRecording(fuckingDelight);
    };
  
  vm.icedChai = function(){
    var icedChai = document.getElementById('icedChai');
   	playRecording(icedChai);
  };

  vm.dasSoMean = function(){
    var dasSomean = document.getElementById('dasSomean');
   playRecording(dasSomean); 
  };
   
  vm.tempurpedic = function(){
    var tempurpedic = document.getElementById('tempurpedic');
   	playRecording(tempurpedic); 
  };
   
  vm.parks = function(){
    var parks = document.getElementById('parks');
    playRecording(parks); 
  };
   
  vm.canUNot = function(){
    var canUNot = document.getElementById('canUNot');
    playRecording(canUNot); 
  };
    
  vm.amazingHouse = function(){
    var amazingHouse = document.getElementById('amazingHouse');
    playRecording(amazingHouse); 
  };
  
  vm.amazinglegs = function(){
    var amazinglegs = document.getElementById('amazinglegs');
    playRecording(amazinglegs); 
  };
       
  vm.paleSophie = function(){
    var paleSophie = document.getElementById('paleSophie');
    playRecording(paleSophie); 
  };
  
  vm.sophieYouLookGood = function(){
    var sophieYouLookGood = document.getElementById('sophieYouLookGood');
    playRecording(sophieYouLookGood); 
  };
  
  vm.southAfricastomach = function(){
    var southAfricaStomach = document.getElementById('southAfricastomach');
    playRecording(southAfricaStomach); 
  };
  
  vm.stuffedFrenchToast = function(){
    var stuffedFrenchToast = document.getElementById('stuffedFrenchToast');
    playRecording(stuffedFrenchToast); 
  };

  function playRecording(audio){
    if (audio.paused === true){
      audio.play();
    } else {
      audio.pause();
    } 
  }
  });


