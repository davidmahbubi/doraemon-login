const input = document.querySelectorAll(".input");
const colorSelector = document.querySelectorAll(".color");
let borderColor = "#00A1E8";
input.forEach(function(e) {
  e.addEventListener("focus", function() {
    e.style.borderBottom = "1px solid " + borderColor;
  });
  e.addEventListener("focusout", function() {
    if (e.value != "") {
      e.style.borderBottom = "1px solid " + borderColor;
    } else {
      e.style.borderBottom = "1px solid #aaaaaa";
    }
  });
});

// This function will check whether inputs have values or not

colorSelector.forEach(function(e) {
  e.addEventListener("click", function() {
    colorSelector.forEach(function(x) {
      x.innerHTML = "";
    });
    e.innerHTML = '<i class="material-icons"> check </i>';
    let classNm = e.className;
    classNm = classNm.split(" ");
    classNm = classNm[classNm.length - 1];
    colorIdentifier(classNm);
  });
});

function colorIdentifier(colorKey) {
  const colorPalette = {
    red: ["#d50000", "white"],
    blue: ["#00A1E8", "white"],
    green: ["#64dd17", "black"],
    yellow: ["#ffff00", "black"],
    orange: ["#ff3d00", "white"]
  };
  color = colorPalette[colorKey];
  changeColor(color[0], color[1]);
}

function changeColor(color, textcolor) {
  let leftContainer = document.querySelector(".col-left");
  let titleBorder = document.querySelector(".border");
  let loginButton = document.querySelector(".login");
  let checkIcon = document.querySelector(".material-icons");

  leftContainer.style.backgroundColor = color;
  titleBorder.style.backgroundColor = color;
  loginButton.style.backgroundColor = color;
  loginButton.style.color = textcolor;
  checkIcon.style.color = textcolor;
  borderColor = color;

  input.forEach(function(e) {
    if (e.value != "") {
      e.style.borderBottom = "1px solid " + borderColor;
    } else {
      e.style.borderBottom = "1px solid #aaaaaa";
    }
  });
}
