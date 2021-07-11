const btn0 = document.getElementById("btn0")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")
const result = document.getElementById("result")

const onClick = function (num) {
    result.innerHTML = num
}

btn0.addEventListener("click",()=>onClick(0))
btn1.addEventListener("click",()=>onClick(1))
btn2.addEventListener("click",()=>onClick(2))
btn3.addEventListener("click",()=>onClick(3))
btn4.addEventListener("click",()=>onClick(4))
btn5.addEventListener("click",()=>onClick(5))
btn6.addEventListener("click",()=>onClick(6))
btn7.addEventListener("click",()=>onClick(7))
btn8.addEventListener("click",()=>onClick(8))
btn9.addEventListener("click",()=>onClick(9))