console.log("Script loaded");
console.log("HELLO WORLD");

button = document.querySelector("button");
button.onclick = function () => {
    console.log("YOU CLICKED ME");
    window.location = "https://google.com";

};