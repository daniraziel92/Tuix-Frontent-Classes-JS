const btnc = document.getElementById("btnc")
const erase = document.getElementById("erase")
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
const btn_point = document.getElementById("btn_point")
const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")
const btn_add = document.getElementById("btn_add")
const btn_div = document.getElementById("btn_div")
const btn_mult = document.getElementById("btn_mult")
const btn_sub = document.getElementById("btn_sub")
const btn_equal = document.getElementById("btn_equal")
let num1="", num2="", symbol=""

const reset=function(){
    num1=0
    num2=""
    result1.innerHTML=Number(num1)
    result2.innerHTML=num2
}

const erase_end=function(){
    num1=String(num1)
    num1=num1.substring(0,num1.length - 1)
    result1.innerHTML=Number(num1)
}

const onClick = function (num) {
    num1+=String(num)
    if(isNaN(num1)){erase_end()}
    result1.innerHTML=Number(num1)
}

const operator = function(op) {
    if(num2===""){
        num2=num1
        num1="0"
        result2.innerHTML=Number(num2)+op
        result1.innerHTML=Number(num1)
        symbol=op
    }
    else {
        total(op)
        operator(op)    
    }
}

const total = function(){
    switch(symbol){
        case "+":
            num1=Number(num1)+Number(num2)
            break;
        case "-":
            num1=Number(num2)-Number(num1)
            break;
        case "x":
            num1=Number(num1)*Number(num2)
            break;
        case "/":
            num1=Number(num2)/Number(num1)
            break;
    }    
    num2=""
    result1.innerHTML=Number(num1)
    result2.innerHTML=num2
}

btnc.addEventListener("click",reset)
erase.addEventListener("click",erase_end)
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
btn_point.addEventListener("click",()=>onClick("."))
btn_add.addEventListener("click",()=>operator("+"))
btn_div.addEventListener("click",()=>operator("/"))
btn_mult.addEventListener("click",()=>operator("x"))
btn_sub.addEventListener("click",()=>operator("-"))
btn_equal.addEventListener("click",total)