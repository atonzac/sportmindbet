function showResult(number) {
  var x = document.getElementById(number);
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
  
function closeFootball() {
  var x = document.getElementById('football-id');
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

  function closeBasket() {
    var x = document.getElementById('basket-id');
    if (window.getComputedStyle(x).display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
 

