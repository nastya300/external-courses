let vector = document.getElementById("menu-vector");
let header = document.getElementById("header");
let menu = document.createElement("div");
let flag = true;

vector.addEventListener("click", () => {
  if (flag) {
    vector.style.transform = "rotate(180deg)";
    menu.classList.add("dropdown");
    menu.innerHTML =
      "<div id='myDropdown' class=dropdown-content'><a class=nav-item> My account</a><br><a class=nav-item>My tasks</a><br> <a class=nav-item>Log out</</div>";
    header.after(menu);
    flag = false;
  } else {
    vector.style.transform = "rotate(0deg)";
    menu.remove();
    flag = true;
  }
});