function send() {
  window.navigator.mozMobileConnection.sendMMI("*144#");
}

var sendButton = document.getElementById('send');
sendButton.addEventListener('click', function onclick() {
  send();
});
