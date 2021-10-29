let array = [
  "assests/1.jpg",
  "assests/2.jpg",
  "assests/3.jpg",
  "assests/4.jpg",
  "assests/5.jpg",
];
let section = document.getElementById("section");
let next = document.getElementById("next");
let back = document.getElementById("back");

next.addEventListener("click", function lis() {
  var current = +section.getAttribute("data-current");
  current++;
  if (current >= array.length) {
    current = 0;
  }
  section.setAttribute("data-current", current);
  section.innerHTML = "<img  src='" + array[current] + "'/>";
});

back.addEventListener("click", function () {
  var current = +section.getAttribute("data-current");
  current--;
  if (current < 0) {
    current = array.length - 1;
  }
  section.setAttribute("data-current", current);
  section.innerHTML = "<img src='" + array[current] + "'/>";
});
