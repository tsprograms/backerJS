/*
tsprograms/backerJS/backer.js
This file created on 6/10/16 by TSPrograms.
Copyright © 2016 TSPrograms.
*/

(function(global) {
  var Model = function(initFunc) {
    var events = {};
    
    this.properties = (typeof initFunc === 'function') ? (new initFunc()) : {};
    this.addEvent = function(name) {
      if (!events.hasOwnProperty(name) && name !== 'hasOwnProperty') {
        events[name] = [];
        return true;
      }
      return false;
    };
    this.callEvent = function(name, data) {
      if (!events.hasOwnProperty(name)) {
        throw 'Backer: Cannot call event "' + name + '" because it does not exist.';
      }
      for (var i = 0; i < events[name].length; i++) {
        events[name][i](data);
      }
    };
    this.listen = function(name, callback) {
      if (!events.hasOwnProperty(name)) {
        throw 'Backer: Cannot listen for event "' + name + '" because it does not exist.';
      }
      if (typeof callback !== 'function') {
        throw 'Backer: Event callback must be a function.';
      }
      events[name].push(callback);
    };
  };
})(window);
