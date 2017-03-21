function fireInputsEmpty() {
  var msg = JSON.stringify({action: "areAllInputsEmpty"});
  window.postMessage(msg, "*");  
}

function fireGetRegistrationId() {
  var msg = JSON.stringify({action: "getPaypageRegistrationId"});
  window.postMessage(msg, "*");  

}
