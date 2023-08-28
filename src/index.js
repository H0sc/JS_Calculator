// const display = document.querySelectorAll(".display")[0]
// display.children[0].value = ""

const input = document.querySelector(".display").children[0]
input.style.textAlign = "end"
const digitsChildren = document.querySelector(".digits").children

document.body.onload = () => input.value = ""

const handleDigits = (e) => {
    console.log(e.target.value)
    // zahl kommt rein als string und muss in float umgewandelt werden
    // dafür muss die zahl geprüft werden auf die anzahl ihrer ziffern
    // wenn die zahl länger ist, als drei ziffern, also bei 1000, wird nach der ersten ziffer ein punkt gesetzt
    
    // 1000 -> 1.000 -> 1 + 3
    // 10000 -> 10.000
    // 100.000
    // 1.000.000 -> 1 + 6
    // 10.000.000
    // 100.000.000
    // 1.000.000.000 -> 1 + 9 
    // 10.000.000.000
    // 100.000.000.000
    // 1.000.000.000.000

    // die länge der ziffern vor dem punkt ist immer maximal 3 
    // die länge der zahl plus 3 ziffern, dann wird ein punkt gesetzt
    // von hinten gezählt: der index des punktes plus 3, dann neuer punkt und neuer index ab dem gespeichert wird.  .+3, .+3, .+3, ...
    // 999 ist die größte zahl 

    // durchlaufe zahl(string).
    // ist die zahl größer als 3 ziffern nacheinander? setze einen punkt nach dem ersten index
    // jetzt ist eine zahl vor dem komma und 3 zahlen hinter dem komma. der punkt ist an 1. index.
    // wenn zahl > 3, setze punkt ans ende. danach wiederholt sich folgendes pattern: 3 ziffern und ein punkt.
    // die punkte verschieben sich nach rechts beim hinzufügen neuer ziffern. oder die zahlen verschieben sich nach links.
    
    // 
    
}

const addEventsToDigits = () => {
    for (let i = 0; i < digitsChildren.length; i++) {
    console.log(`index ${i}`, digitsChildren[i].innerHTML)
    digitsChildren[i].addEventListener("click", handleDigits)
}
}
document.onload = addEventsToDigits()



