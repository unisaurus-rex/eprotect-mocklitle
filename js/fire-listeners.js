function fireAllInputsEmpty() {
  var msg = JSON.stringify({action: "allInputsEmpty"});
  window.postMessage(msg, "*");  
}

function fireGetRegistrationId() {
  var msg = JSON.stringify({action: "getPaypageRegistrationId"});
  window.postMessage(msg, "*");  

}
