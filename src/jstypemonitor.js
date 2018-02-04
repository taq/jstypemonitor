/**
 * JSTypeMonitor
 *
 * Detects typing and fire a callback when some conditions are reached.
 *
 * Version 1.0.0
 */
var Bluefish = typeof Bluefish === "undefined" ? {} : Bluefish;

Bluefish.JSTypeMonitor = function(options) {
   var self = this;

   this.element       = options.element;
   this.minimumLength = options.minimumLength;
   this.callback      = options.callback;
   this.interval      = options.interval;
   this.lastChange    = new Date();

   /**
    * Fire watching
    */
   this.fire = function() {
      this.elementRef().onkeyup = this.changed;
   };

   /**
    * Element changed
    */
   this.changed = function(event) {
      if (!self.callback) {
         return;
      }

      if (!self.checkInterval()) {
         return;
      }

      var value = self.elementRef().value;
      var min   = self.minimum();
   
      if (min > 0 && value.length < min) {
         return;
      }

      self.callback(event);
   };

   /**
    * Return the minimum length, as an integer
    */
   this.minimum = function() {
      var min = parseInt(this.minimumLength);
      if (isNaN(min)) {
         return 0;
      }
      return min;
   };

   /**
    * Return element reference
    */
   this.elementRef = function() {
      if (typeof(this.element) == 'object') {
         return this.element;
      }
      return document.querySelector('#' + this.element);
   };

   /**
    * Check interval, in milliseconds
    */
   this.checkInterval = function() {
      var num = parseInt(this.interval);

      if (isNaN(num)) {
         return false;
      }

      var diff = (new Date()) - this.lastChange;

      if (diff < this.interval) {
         return false;
      }

      this.lastChange = new Date();
      return true;
   };
};
