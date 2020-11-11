const button=document.getElementById("button-main");
console.log(button)
button.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})
