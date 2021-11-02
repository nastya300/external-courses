let vector = document.getElementById("menu-vector");
let header = document.getElementById("header");
let flag = true;
let menu = document.createElement("div");

vector.addEventListener("click", () => {
    if (flag) {
        vector.style.transform = "rotate(180deg)";
        menu.classList.add("dropdown");
        menu.innerHTML =  "<div id='myDropdown' class=dropdown-content'><a> My account</a><br><a>My tasks</a><br> <a>Log out</</div>";
        header.after(menu);
        flag=false;
    }else{
        vector.style.transform = "rotate(0deg)";
        menu.remove();
        flag=true;
    }
});




