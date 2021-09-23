function binhPhuong(number) {
  return number * number;
}

function tinhDienTichHinhTron(banKinh) {
  if (banKinh <= 0) {
    return "Khong tinh duoc";
  } else {
    return Math.PI * banKinh * banKinh;
  }
}

// Thay đổi màu sắc tiêu đề h1
function changeTitleColor() {
  document.querySelector("h1").style.color = "red";
  document.querySelector("h1").style.color = "red";
}

function changeColor() {
  let index = document.querySelectorAll("li");
  index[0].style.color = "greenyellow";
  index[1].style.color = "blue";
  index[2].style.color = "gold";
  alert("Vui lòng kéo lên trên để xem kết quả");
}

function changeBgColor(color) {
  document.querySelector("body").style.backgroundColor = "green";
}

function copyContent(paragraph1, paragraph2) {}

function changeFontSize() {
  let index = document.querySelectorAll("li");
  let size = document.getElementById("intFontSize").value;
  index[4].style.fontSize = size + "px";
}

function increaseFontSize(paragraph) {
  document.getElementById("").style.color = "green";
}

function decreaseFontSize(paragraph) {}
