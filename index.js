const button=document.getElementById("button-main");
console.log(button)
let x = 0;
button.addEventListener("click", () => {

    if (x == 0) {
    let red = 30;
    let green = 30;
    let blue = 30;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
    document.getElementById("header-welcome").style.color = "#ffa64f";
    document.getElementById("paragraph-1").style.color = "#ffa64f";

    }
    else if (x == 1) {
    let red = 255;
    let green = 255;
    let blue = 255;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
    document.getElementById("header-welcome").style.color = "#000000";
    document.getElementById("paragraph-1").style.color = "#000000";
    
    }
    x++
    if (x>1) x=0;
})
