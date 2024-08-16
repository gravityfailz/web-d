// document.createElement("");

// div.textContent
// div.innerhtml
// a.getAttribute("src")

var btn = document.querySelector("button");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");

// flag==0

btn.addEventListener("click", function () {
  var p1src = p1.getAttribute("src");
  var p2src = p2.getAttribute("src");
  p1.setAttribute("src", p2src);
  p2.setAttribute("src", p1src);
});

///  [...arr] - spread operator
