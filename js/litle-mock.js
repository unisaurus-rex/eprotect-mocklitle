/**
 * @file litle-mock.js
 * mock litle_api3.js for testing
 */

function LitlePayPage() {
  return {
    sendToLitle: function(litleRequest, litleFormFields, successCallback,
			  errorCallback, timeoutCallback, timeout) {
      console.log("Got a message. Any questions?");
    }
  };
};
