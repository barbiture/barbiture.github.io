function moveOne() {
  var elem = document.getElementById("barOne");
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%';
      document.getElementById("labelOne").innerHTML = width * 1  + '%';
    }
  }
}
function moveTwo() {
  var elem = document.getElementById("barTwo");
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%';
      document.getElementById("labelTwo").innerHTML = width * 1;
    }
  }
}