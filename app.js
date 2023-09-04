const lightmode = document.getElementById("lightmode")
const darkmode = document.getElementById("darkmode")
const nav = document.getElementById("nav")
lightmode.addEventListener("click",() => {
    document.body.style.backgroundColor = "#a7a7a7"
})
darkmode.addEventListener("click",() => {
    document.body.style.backgroundColor = "rgb(26, 25, 25)"
})
