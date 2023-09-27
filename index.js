//  INTRO

const intro1 = document.querySelector(".intro1");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    intro1.classList.add("display-none");
  }, 1500);
});

//BOTON RESET FORM

function limpiar() {
    var txt = document.getElementById("name");
    txt.value = " ";
    var txt = document.getElementById("email");
    txt.value = " ";
    var txt = document.getElementById("number");
    txt.value = " ";
    var txt = document.getElementById("pais");
    txt.value = " ";
    var txt = document.getElementById("coments");
    txt.value = " ";
  };

// FORMA DE CREAR ALERTA

//   document.getElementById('enviar').onclick = function(){
//     alert('Gracias por enviar tu CV!');
// }