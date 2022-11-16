function create() {
  var elementH = document.createElement("h3");
  var main = document.getElementById("main");
  main.appendChild(elementH);
  var textH = document.createTextNode("Beast");
  elementH.appendChild(textH);
  var element = document.createElement("p");
  //   var main = document.getElementById("main");
  main.appendChild(element);
  var text = document.createTextNode("Beast likes lions");
  element.appendChild(text);
}

function paragraph() {
  var changeName = document.getElementsByClassName("p");
  var changeName1 = changeName[0].innerHTML;
  var changeName2 = changeName[1].innerHTML;
  var addItem = (changeName[2].innerHTML = changeName1 + changeName2);
  changeName[0].innerHTML = "";
}

function para() {
  var elementH = document.getElementsByTagName("h2")[2];
  var parent = elementH.parentNode;
  parent.removeChild(elementH);
  var elementH = document.getElementsByTagName("p")[1];
  parent.removeChild(elementH);
}

function changeText() {
  var parent = document.getElementById("main");
  var child = parent.childNodes[3];
  child.style.color = "violet";
}
function change() {
  var child = document.getElementById("p1");
  var parent = child.parentNode;
  parent.style.color = "gray";
}

function changeto() {
  var child = document.getElementById("yup");
  var parent = child.nextElementSibling;
  parent.style.color = "orange";
}

function c() {
  var conformation = confirm("These changes are final");
  if (conformation == true) {
    var child = document.getElementsById("pag");
    c1 = child[1].innerHTML;
    c2 = child[2].innerHTML;
    var h = (child[5].innerHTML = c1 + c2);
    document.getElementById("button").style.visibility = "hidden";
  }
}

function classe(type, color, miles) {
  this.type = type;
  this.color = color;
  this.miles = miles;
}

var car1 = new classe("SUV", "violet", 5);

function ch() {
  document.getElementById("pn").innerHTML =
    car1.type + "car with" + car1.miles + "miles" + car1.color + "colors";
}
function page() {
  window.location = "index.html";
}
