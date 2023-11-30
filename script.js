
let btn = document.querySelector("button")
let bg = document.querySelector("body")
let spn = document.querySelector("span")

btn.addEventListener("click", function(){
    const colorList = ["Pink","Yellow","blue", "green", "aqua","aquamarine","bisque","blueviolet"]
    let colorLength = colorList.length
    let n =Math.floor(Math.random()*colorLength)

    console.log(n)
    bg.style.backgroundColor =colorList[n]
    spn.innerHTML =colorList[n]
    spn.style.color =colorList[n]
})