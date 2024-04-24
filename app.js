// Input de colores
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

//texto  de colores
const textoRojo = document.getElementById('text-rojo');
const textoVerde = document.getElementById('text-verde');
const textoAzul = document.getElementById('text-azul');

//color completo
const colorcompleto = document.getElementById('colorcompleto');


//Trae el value del input
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Función para actualizar el color completo y los valores de texto
function actualizarColorCompleto() {
  // Actualizar los valores de textoRojo, textoVerde y textoAzul
  textoRojo.innerText = rojo;
  textoVerde.innerText = verde;
  textoAzul.innerText = azul;
  
  // Actualizar el color del body
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;

  // Actualizar el texto del color completo
  colorcompleto.innerText = `${colorRGB}`;
}

//Actualizar el color completo y los valores de texto cuando se cambia alguno de los rangos
inputRojo.addEventListener('input', (e) =>{
    rojo = e.target.value;
    actualizarColorCompleto();
});

inputVerde.addEventListener('input', (e) =>{
    verde = e.target.value;
    actualizarColorCompleto();
});

inputAzul.addEventListener('input', (e)=>{
    azul = e.target.value;
    actualizarColorCompleto();
});

// Actualizar el color completo y los valores de texto al cargar la página
actualizarColorCompleto();
