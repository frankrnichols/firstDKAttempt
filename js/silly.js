var daddies = (function(module) {
	module.DoIt = function(resultObject) {
		resultObject.prepend(Date() + '<br/>');
		};
	module.DoIt2 = function(resultObject) {
		resultObject.prepend('Hi there, sailor.' + '<br/>');
		};
	return module;
}(daddies || {}));

var blahblah = {
  initialize: function(resultObject) {
		resultObject.prepend('Initialized' + '<br/>'); 
  },
  startScan: function(resultObject) {
		resultObject.prepend('startScanned' + '<br/>'); 
  }
}
module.exports = blahblah;