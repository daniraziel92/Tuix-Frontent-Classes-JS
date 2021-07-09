
/*const text2 = "asdasd"
let text3 = ""
text3 = 0.00
text3 = [1, 2, 3, "asd", [1, "a"]]
text3[3]
let obj = {
    name: "Juan",
    address: {
        number: 62,
        street: "Dennerstrasse"
    }
}

text4 = false

const func1 = function (fn) {
    fn()
    console.log("Hola F1")
}

const func2 = function () {
    console.log("Hola F2")
}

func1(func2)*/
// line comment


const btn1 = document.getElementById("btn1")
const inputsWithClassText = document.getElementsByClassName('text')
const result = document.getElementById("result")

const firstInput = inputsWithClassText[0]
const secondInput = inputsWithClassText[1]


const onClick = function () {
    const result2 = Number(firstInput.value) + Number(secondInput.value)
    result.innerHTML = '<b>' + result2 + '</b>'
}



btn1.addEventListener('click', onClick)
