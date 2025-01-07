console.log(`El Javascript va D1`)

/* el parseFloat lo hace como Flotante, sino es string y concatena */    
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
const op = document.getElementById("operator")
let btn_op = document.getElementById("btn-op")
const result = document.getElementById("result")



/* consolelog del 1er input */
num1.addEventListener("input", (event) => {
    console.log(event.target.value)
})



btn_op.addEventListener("click", ()=> {

    let resultAux

    value1 = parseFloat(num1.value)
    value2 = parseFloat(num2.value)

    switch(op.value){
        case "+":
            resultAux = value1 + value2
            break;
        case "-":
            resultAux = value1 - value2
            break;
        case "*":
            resultAux = value1 * value2
            break;
        case "/":
            resultAux = value1 / value2
            break;
        default:
            result.style = "color: red"
            result.textContent = "Operacion no valida"
            break;
    }

    

    result.textContent = resultAux
})