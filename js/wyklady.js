var slideIndex = null;

function loadLecture(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const slideNumber = urlParams.get('slide')
    if (slideNumber !== null){
        slideIndex = Number(slideNumber)
    }
    else {
        slideIndex = 1;
    }
    showDivs(slideIndex);
}
document.addEventListener("DOMContentLoaded", loadLecture);

function plusDivs(n) {
  showDivs(slideIndex = slideIndex + n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slajd");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

function showSlides(n) {
  var x = document.getElementById("my-slajds");
  var i;
  var y = document.getElementsByClassName("slajd");
  if (x.className === "slajds") {
      x.className += " all-slajds";
    for (i = 0; i < y.length; i++) {
      y[i].style.display = "block";
    }

  } else {
    x.className = "slajds";
    for (i = 0; i < y.length; i++) {
      y[i].style.display = "none";
    }
    y[n-1].style.display = "block";
    slideIndex = n;
  }
}

function ExitShowSlidesByEscape(e) {
  if (e.key == "Escape"){
    const isNotCombinedKey = !(e.ctrlKey || e.altKey || e.shiftKey);
    var x = document.getElementById("my-slajds");
    if (isNotCombinedKey && x.className === "slajds all-slajds") {
      x.className = "slajds";
      var i;
      var y = document.getElementsByClassName("slajd");
      for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
      }
      y[slideIndex-1].style.display = "block";
    }
  }
}
document.addEventListener("keyup", ExitShowSlidesByEscape);

function ExitShowSlidesByClick(e) {
  var x = document.getElementById("my-slajds");
  if (e.target.id === "my-slajds") {
          x.className = "slajds";
      var i;
      var y = document.getElementsByClassName("slajd");
      for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
      }
      y[slideIndex-1].style.display = "block";
  }
} 
document.getElementById("my-slajds").addEventListener("click", ExitShowSlidesByClick);

function ChangeSlidesByArrow(e) {
    switch (e.keyCode) {
        case 37:
            plusDivs(-1);
            break;
        case 39:
            plusDivs(1);
            break;
    }
  }
document.addEventListener("keyup", ChangeSlidesByArrow);
