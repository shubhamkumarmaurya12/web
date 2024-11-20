let b = document.querySelector("#bt");
let mode = "light"; 
b.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark"; 
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        mode = "light"; 
        document.querySelector("body").style.backgroundColor = "rgb(170, 191, 201)";
    }
});
