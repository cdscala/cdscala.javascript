let memoria = []
let resultadoIntermedio= ''
let operator = ''
let resultado = ''

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];


function Suma(x, y){
    let aux = x + y
    console.log(aux)
    console.log(aux.toString())
    return aux.toString()
}
function Resta(x, y){
    let aux = x - y
    return aux.toString()
}
function Porcentaje(x, y){
    let aux = x * (y/100)
    return aux.toString()
}
function Modulo(x, y){
    let aux = x % y
    return aux.toString()
}
function Multiplicacion(x, y){
    let aux = x * y
    return aux.toString()
}
function Division(x, y){
    if (y==0){
        return('inf')
    }
    let aux = x / y
    return aux.toString()
}

function display(value){
    resultadoIntermedio = resultadoIntermedio + value
    console.log(resultadoIntermedio)
    let elemento = document.querySelector("#cs-screen")
    elemento.innerText = resultadoIntermedio
}
function displayResultado(value){
  let elemento = document.querySelector("#cs-screen")
    elemento.innerText = value
}

function reset(value){
    console.log(value)
    resultadoIntermedio = ''
    resultado = ''
    operator = ''
    let elemento = document.querySelector("#cs-screen")
    elemento.innerText = ''

}
function realizarOperacion(operador){
  console.log('INICIO: '+ operator + ' Resultado: '+resultado+' resultadoIntermedio: ' +resultadoIntermedio)
  if (resultadoIntermedio === ''){
    operator = operador
  }
  else{
    switch(operator){
      case "+":
        resultado=Suma(parseFloat(resultado),parseFloat(resultadoIntermedio))
        console.log('Estoy en la suma: ' + ' Resultado: '+resultado+' resultadoIntermedio: ' +resultadoIntermedio)
        break
      case "-":
        resultado=Resta(parseFloat(resultado),parseFloat(resultadoIntermedio))
        break
      case "X":
        resultado=Multiplicacion(parseFloat(resultado),parseFloat(resultadoIntermedio))
        break
      case "/":
        resultado=Division(parseFloat(resultado),parseFloat(resultadoIntermedio))
        break
    }
    if (operator==''){
      resultado = resultadoIntermedio
    }
    operator = operador
    resultadoIntermedio = ''
    displayResultado(resultado)
  }
  
  console.log('Operador: '+ operador + ' Resultado: '+resultado+' resultadoIntermedio: ' +resultadoIntermedio)
}


function selector(button){
  switch(button){
      case "\'C\'":
          return (`reset(${button})`)
      case "\'=\'":
      case "\'+\'":
      case "\'-\'":
      case "\'/\'":
      case "\'X\'":
          return (`realizarOperacion(${button})`)
      default:
          return (`display(${button})`)
  }
}

class Calculator extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="cs-wrapper" id="cs-wrapper">
            <div class="cs-screen" id="cs-screen" >
                
            </div>
            <div class="cs-button-box" id="cs-button-box">
                ${btnValues.flat().map((btn, i) => {
                          return (
                            `<button class='cs-button'
                              key=${i}
                              onclick=${selector(`\'${btn}\'`)}
                            >
                                ${btn}
                            </button>`
                          )
                        }).join('')}
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('calculator-component', Calculator);

