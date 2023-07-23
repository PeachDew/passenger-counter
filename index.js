let count = 0
let countHTML = document.getElementById("pCount")
console.log(count)

function incrementFunction() {
    count ++
    countHTML.innerText = count
    console.log(count)
}
