const calculator = document.querySelector(".calculator")
const keys = document.querySelector(".calculator__keys")
const display = document.querySelector(".calculator__display")

const setDisplayZero = () => {
    display.textContent = "0"
}

keys.addEventListener("click", (e) => {
    let key = e.target
    let action = key.dataset.action
    let keyContent = key.textContent
    let displayedNum = display.textContent

    // wenn jeglicher button geklickt wird
    if (e.target.matches("button")) {
        Array.from(key.parentNode.children).forEach(el => {
            el.classList.remove("is-depressed")
        })
    } else {
        return console.log("you touched the grid! try to hit the buttons :V")
    }
    // buttons die keine action buttons sind; number keys
    let previousKeyType = calculator.dataset.previousKeyType
    if (!action) {
        if (displayedNum === "0" || previousKeyType === "operator") {
            display.textContent = keyContent
            calculator.dataset.previousKeyType = "number"
        } else if (previousKeyType === "number") {
            display.textContent = displayedNum + keyContent
        }
    }

    // wenn ein operator button geklickt wird
    if (
        action === "add" ||
        action === "subtract" ||
        action === "multiply" ||
        action === "divide"
    ) {
        key.classList.add("is-depressed")
        calculator.dataset.previousKeyType = "operator"
        calculator.dataset.firstNum = displayedNum
        calculator.dataset.operator = action
    } 

    if (action === "decimal") {
        if (displayedNum.includes(".")) {
            console.log("nur ein decimal pro number")
        } else {
            display.textContent = displayedNum + "."
        }
        // calculator.dataset.previousKeyType = "decimal"
    }

    const calculate = (n1, op, n2) => {
        
        let result = ""
        if (op === "add") {
            result = parseFloat(n1) + parseFloat(n2)
        } else if (op === "subtract") {
            result = parseFloat(n1) - parseFloat(n2)
        } else if (op === "multiply") {
            result = parseFloat(n1) * parseFloat(n2)
        } else if (op === "divide") {
            result = parseFloat(n1) / parseFloat(n2)
        }
        return result
    }

    if (action === "calculate" && calculator.dataset.previousKeyType != "decimal") {
        let calcVals = {
            firstNum: calculator.dataset.firstNum,
            operator: calculator.dataset.operator,
            secondNum: displayedNum
        }

        for (let prop in calcVals) {
            if (prop === undefined) {
                return
            } else {
                
            }
        }

        console.log(calcVals.firstNum, calcVals.operator, calcVals.secondNum)

        display.textContent = calculate(calcVals.firstNum, calcVals.operator, calcVals.secondNum)
        // display.textContent = calculate(firstNum, operator, secondNum)
    } 


    if (action === "clear") {
        display.textContent = "0"
    }
})


