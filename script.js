let input = document.getElementById("enviar")
let valor = document.getElementById("valor")

let numero = document.getElementById("numero") /*Valor digitado*/ 
let resultado = document.getElementById("resultado")

function apertar(){
    if ( valor.value == "Celsius > Fahrenheit" ) {
        let formula = (numero.value * 1.8) + 32 ;
        resultado.innerHTML = `${formula.toFixed(1) + " Graus Fahrenheit"}`
        
    } else if (valor.value == "Fahrenheit > Celsius"){
        let formula = (numero.value - 32) / 1.8;
        resultado.innerHTML = `${formula.toFixed(1) + " Graus Fahrenheit"}`
    }
}

input.addEventListener("click", apertar)
    


























// function enviar(){
//     if(c.value == ""){
//         alert("Adicione um Numero")
//         resultado.innerHTML = ""

//     } else {
//         let funcao = (c.value * 1.8 ) + 32;
//         resultado.innerHTML = funcao + " Graus Fahrenheit"
//     }
// }