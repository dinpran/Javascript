// // document.write("hello");
// // alert("hola");
// // function saySomething() {
// //   alert("function");
// // }
// // saySomething();

// // function addsomething(num, string) {
// //   var add = num + string;
// // //   alert(add);
// // }

// // addsomething(455, "Programme to write");

// // var beast = 5;
// // var hol = 11;
// // var hola = 11;
// // beast += hol;
// // beast++;
// // document.write(beast);
// // alert("hola");

// // function addSomething(num, string) {
// //   var add = num + string;
// //   alert(add);
// // }

// ///////////////////////////////////////////////////////////////////////////////////////////

// // // addSomething(5, " GAMES");

// // var number1 = 5;
// // var number2 = 9;
// // var number1 = number1 + number2;
// // number1++;
// // document.write(number1);
// // num = 5 + 3 * 4;
// // document.write("</br>");
// // document.write(num);

// // var food = "";
// // if (food == "apple") {
// //   alert("food");
// // } else if ((food = +"chocolate")) {
// //   alert("we ate chocolate");
// // } else if (food == "") {
// //   alert("we did not eat anything");
// // } else {
// //   alert("we ate something else");
// // }
// // i = 10;
// // while (i <br 15) {
// //   document.write("HOLA");
// //   document.write("</br>");
// //   i++;
// // }

// // for (i = 1; i <br 5; i++) {
// //   document.write("GAMES");
// //   document.write("</br>");
// // }

// // function batting(name, distance) {
// //   if (distance <= 350 && distance != 0) {
// //     document.write(name + " hit the ball");
// //   } else if (distance == 0) {
// //     document.write(" is out");
// //   } else {
// //     document.write(" homerun");
// //   }
// // }
// // batting("Steve", 250);

// // function add(x, y) {
// //   var result = x + y;
// //   return result;
// // }

// // var theResult = add(5, 11);
// // document.write(theResult);

// // g = "Hello";
// // function global() {
// //   hgl = "HOLA";
// // }
// // document.write(hgl);

// var orc = {
//   color: "violet",
//   height: "5",
//   weight: "55",
//   yell: function () {
//     document.write("HOLA");
//   },
//   hola: function () {
//     document.write("HOLA");
//   },
// };
// if (orc.color == "violet") {
//   orc.hola();
// } else {
//   document.write("oa;d;alka");
// }
// document.write(orc.color);
// orc.hola();
// function h() {
//   hola = "HOLaf;hjdaaiA";
// }
// document.write(hola);
// orc.height = "35";
// orc.h = 5;
// document.write("</br>");
// document.write(orc.h);

var orc = {
  color: "violet",
  height: 5,
  weight: 5,
};
document.write(orc.color);
orc.h = 5;
orc.color = 35;
document.write("</br>");
document.write(orc.h);
document.write("</br>");
document.write(orc.color);

var string = "We play football";
string = string.toUpperCase();
document.write("</br>");
document.write(string);
string = string.length;
document.write("</br>");
document.write(string);
var string = "We play football";
string = string.charAt(4);
document.write("</br>");
document.write(string);
var string = "We play football";
string = string.replace("play", "hi");
document.write("</br>");
document.write(string);
string = string.bold();
document.write("</br>");
document.write(string);
var number = 4.7;
document.write("</br>");
document.write(Math.ceil(number)); //round, floor
var today = new Date();
document.write("</br>");
document.write(today.toDateString());
function onChange() {
  //   document.getElementById("p1").style.color = "violet";
  var p = document.getElementsByTagName("p");
  //   var h = document.getElementsByClassName("p");
  //   var changedText = (h[1].style.color = "orange");
  for (i = 0; i < p.length; i++) {
    var changeText = (p[i].style.color = "violet");
  }
  var changedName = (p[1].innerHTML = "YA");
  //   var changePText = (p[1].style.color = "violet");
  var changeName = document.getElementsByTagName("p");
  var changeName1 = changedName[1].innerHTML;
  var changeName2 = changedName[2].innerHTML;
  changeName[5].innerHTML = changeName1 + changeName2;
  var paragraph = document.getElementsByTagName("p");
  var c1 = paragraph[1];
  var c2 = paragraph[2];
  additem = paragraph[5].innerHTML = c1.innerHTML + c2.innerHTML;
}

function onChangeStyle() {
  document.getElementById("image").src = "beast.jpg";
}

function changebackground() {
  var changebackgroundcolor = (document.getElementById("para").style.color =
    "aqua");
}

function onchangeout() {
  var onchangeout = (document.getElementById("para").style.color = "");
}

function newimage() {
  var newimg = (document.getElementById("imag").src = "beast.jpg");
}

function oldimage() {
  var newihmg = (document.getElementById("imag").src = "lion.jpg");
}

function changeh() {
  var changehhh = document.getElementsByTagName("h");
  var h = (changehhh[5].innerHTML =
    changehhh[0].innerHTML + changehhh[1].innerHTML);
}
/////
function create() {
  var element = document.createElement("p");
  var main = document.getElementById("main");
  main.appendChild(element);
  var text = document.createTextNode("Beast likes lions");
  element.appendChild(text);
}
