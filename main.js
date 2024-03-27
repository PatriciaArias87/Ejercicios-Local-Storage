/*Crear un formulario de contacto con los siguientes campos:
Nombre
Correo
Mensaje*/

//Crea una función que cuando envíes el formulario muestre por consola los datos de contacto 
//rellenados en un objeto de JS.

/*const inputName = document.getElementById('Nombre','Email', 'Mensaje');

//const inputText = document.getElementById('Mensaje');

const btn = document.getElementById('btn')

//localStorage.removeItem('Nombre')

//const name = document.getElementById('Nombre').value;

btn.addEventListener('click',onSubmit)
function onSubmit(e) {
  e.preventDefault()

  const NameValue = inputName.value
 
  //const TextValue = inputText.value

  localStorage.setItem('Nombre', NameValue )
  localStorage.setItem('Email',EmailValue)
 // localStorage.setItem('Mensaje',TextValue)
}*/


const inputName = document.getElementById('Nombre');
const inputEmail = document.getElementById('Email');
const inputMensaje = document.getElementById('Mensaje');
const btn = document.getElementById('btn');

btn.addEventListener('click', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const nameValue = inputName.value;
  const emailValue = inputEmail.value;
  const mensajeValue = inputMensaje.value;

  const datosContacto = {
    nombre: nameValue,
    email: emailValue,
    mensaje: mensajeValue
  };

  console.log(datosContacto);

  localStorage.setItem('contacto', JSON.stringify(datosContacto));
}






