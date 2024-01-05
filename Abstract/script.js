function clickHamburgerMenu() {
    var x = document.getElementById("buttons-visible");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
        x.style.flexDirection = "column";
        x.style.justifyContent= "space-around";
        x.style.backgroundColor = "black";
        x.style.position = "absolute";
        x.style.top = "60px";
        x.style.left = "0";
        x.style.width = "100vw";
        x.style.height = "116px";
    }
}