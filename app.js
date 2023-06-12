let cont
let input
let operaciones = ['suma','resta', 'modulo', 'porcentaje', 'multiplicacion', 'division']
let memoria = []

function Calculadora(){
    alert('Esta calculadora es de tipo escritura y acepta solo dos numeros de entrada y una operacion.')
    let x, y
    let operacion
    let opOK = false
    while(!opOK){
        if (x == null){
            x = parseFloat(prompt('Ingresa el primer numero: ','0'))
        }
        if (operacion == null){
            operacion =  prompt('Que operacion quieres realizar? (suma, resta, modulo, porcentaje, multiplicacion, division)' , 'suma').toLowerCase()
            if (!operaciones.includes(operacion)){
                operacion = null
                opOK=false
            }
            else{
                opOK = true
            }
        }
        if (y == null){
            y = parseFloat(prompt('Ingresa el segundo numero: ','0'))
        }
    }
    let resultado = 'vacio'
    switch(operacion){
        case 'suma':
            resultado = Suma(x,y)
            break
        case 'resta':
            resultado = Resta(x,y)
            break
        case 'modulo':
            resultado = Modulo(x,y)
            break
        case 'porcentaje':
            resultado = Porcentaje(x,y)
            break
        case 'multiplicacion':
            resultado = Multiplicacion(x,y)
            break
        case 'division':
            resultado = Division(x,y)
            break
    }
    alert('El resultado de tu operacion es: ' + resultado)

    return operacion + ': ' + resultado
}
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

while((input == null || input == '') && (input !== 'si' || input !== 'no')){
    input = prompt('Comenzar operacion? (si/no)').toLowerCase()
}
if (input == 'si'){
    input = prompt('Que funcion quieres realizar? (Calculadora / Salir / nuevas opciones mas adelante...)','calculadora').toLowerCase()
    do{
        switch(input){
            case 'calculadora':
                memoria.push(Calculadora())
                input = 'reingreso'
                cont = true
                break
            case 'salir':
                cont = false
                break
            case 'reingreso':
                input = prompt('Que funcion quieres realizar? (Calculadora / Salir / nuevas opciones mas adelante...)','salir').toLowerCase()
                cont = true
                break
            default:
                input = rompt('La funcion que seleccionaste no esta disponible. Que funcion quieres realizar? (Calculadora / Salir / nuevas opciones mas adelante...)').toLowerCase()
                cont = true
                break
        }
    }
    while(cont)
}
else{
    let res = document.querySelector("#resultados");
    let node = document.createElement('h1')
    node.appendChild(document.createTextNode('Saliste sin hacer ninguna operacion.:('))
    res.appendChild(node)
}

let res = document.querySelector("#resultados");
let node1 = document.createElement('h1')
node1.appendChild(document.createTextNode('El resultado de tus operaciones es: '))
res.appendChild(node1)
let list = document.createElement('ul')
memoria.forEach((value)=>{
    let elemento = document.createElement('li')
    elemento.innerText = value
    list.appendChild(elemento)
})
res.appendChild(list)


