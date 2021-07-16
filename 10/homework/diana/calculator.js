

const ans = document.getElementById("respuesta")
const num = document.getElementById("n1").value
const op = document.getElementsByClassName("button op")
const del = document.getElementsByClassName("button del")
const eql = document.getElementsByClassName("button equal")


function Del() {
    document.getElementById("respuesta").innerHTML=""
}

function Escr(ident) {
    
    const answer = document.getElementById("respuesta")   
    answer.innerHTML= answer.innerHTML + document.getElementById(ident).value        
 
}

function operate() {
    const answer = document.getElementById("respuesta").innerHTML
        myarray = ""


    if (answer.includes("+")) {
        myarray = answer.split("+")
        num1 = Number(myarray[0])
        num2 = Number(myarray[1])
        result = num1+num2
        
        
    } else

    if (answer.includes("-")) {
        myarray = answer.split("-")
        num1 = Number(myarray[0])
        num2 = Number(myarray[1])
        result = num1-num2
        
        
    } else

    if (answer.includes("*")) {
        myarray = answer.split("*")
        num1 = Number(myarray[0])
        num2 = Number(myarray[1])
        result = num1*num2
        
        
    } else

    if (answer.includes("/")) {
         myarray = answer.split("/")
        num1 = Number(myarray[0])
        num2 = Number(myarray[1])
        result = num1/num2
        
        
    }

    document.getElementById("respuesta").innerHTML = result
}

