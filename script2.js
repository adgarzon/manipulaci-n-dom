const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result =document.querySelector("#result");
const form = document.querySelector("#form");


form.addEventListener("submit",btnOnClick);
function btnOnClick(event){
    console.log("Escuchooooooo");
    event.preventDefault();
    
    const suma = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = "Resultado = " + suma;

}