// const display = document.querySelectorAll(".display")[0]
// display.children[0].value = ""

const input = document.querySelector(".display").children[0]
input.style.textAlign = "end"
const digitsChildren = document.querySelector(".digits").children

document.body.onload = () => input.value = ""

let currentOperation = []
const handleInputValue = (e) => {
    currentOperation += e.target.innerHTML
    console.log(parseFloat(currentOperation))
    // input.value = currentOperation
    // console.log(input.style.cssText) <-- inlinestyle
    // console.log(getComputedStyle(input).textAlign)
    // console.log(input.style.cssText)
}

const addEventsToDigits = () => {
    for (let i = 0; i < digitsChildren.length; i++) {
    console.log(`index ${i}`, digitsChildren[i])
    digitsChildren[i].addEventListener("click", handleInputValue)
}
}
document.onload = addEventsToDigits()



