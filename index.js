// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("text").innerHTML = "This is really cool!"
    console.log("The DOM has loaded")
})

console.log(
    "This console.log() fire when index.js loads - before DOMContentLoaded is triggered"
)