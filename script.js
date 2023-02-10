let h1 = document.querySelector("h1")
let p = document.querySelector("p");
let pClase = document.querySelector(".parrafo");
let pClase2 = document.getElementsByClassName("parrafo");
let pid = document.querySelector("#pid");
let pid2 = document.getElementById("pid");

console.log(
    {
        p,
        pClase,
        pClase2,
        pid,
        pid2,
    }
);

h1.innerHTML = 'escribo desde javascript jajaja <br> salto linea';
h1.innerText = 'escribo desde javascript jajaja <br> salto linea';

console.log( h1.getAttribute("pantalla"));
h1.setAttribute("pantalla","cambio");
console.log( h1.getAttribute("pantalla"));

h1.classList.add("rojo"); 

const img = document.createElement("img");
img.setAttribute("src","https://tse3.mm.bing.net/th?id=OIP.8cMyPbFQ1qrMeEQzTvN7hQHaE8");
console.log(img);


pid.innerHTML="";
pid.appendChild(img);