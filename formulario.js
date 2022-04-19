let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputtextArea = document.getElementById("message");
let inputSubmit = document.getElementById ("submit");
let inputButton = document.getElementById ("boton");

let formulario = document.getElementById("form");


const contenido = document.querySelector('#listaUsuarios')



let tipo= 1

async function traer() {
     await fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => {
        console.log(data.results[tipo])
        contenido.innerHTML = `
        <p>Nombre del cupon de regalo para futuras compras: ${data.results[tipo].name}</p>
        `
    })
}


formulario.addEventListener("submit", (e) => {

    console.log("Enviando formulario");
    e.preventDefault();
    console.log(`La persona se llama ${inputName.value} y su email es ${inputEmail.value} y quiere dejarnos este mensaje ${inputtextArea.value}`);
});

formulario.addEventListener("mousemove", () => {
    console.log("Moviste el mouse");
})

inputButton.addEventListener("click", () => {
    Swal.fire({
        title: '¿Ya te vas?',
        text: 'Es una pena, te esperamos la proxima',
        icon: 'warning',
        confirmButtonText: 'Adios',
        backdrop: "#0000004a",
        allowOutsideClick: false,
    }).then( (resultado) => {
      console.log(resultado);
      window.location.href = "./index.html";

      
      
    
 }) 
 });


class Usuarios{
    constructor(nombre, email, consulta){
        this.nombre = nombre;
        this.email = email;
        this.consulta =consulta;
    }
}

//Obtener elementos del formulario 

const form = document.getElementById("form");
const nombreP = document.getElementById("name");
const emailP = document.getElementById("email");
const consultaP = document.getElementById("message");
const listaUsuarios = document.getElementById("listaUsuarios");

//Variable ID Storage

let contador = 0;

let textoListado = "";

//array con datos del storage
const arrayUsuarios = [];


//funciones al cargar la pagina
window.addEventListener("load", ()=>{
    for(let i=0; i<sessionStorage.length;i++){
        let clave = sessionStorage.key(i);
        let usuario = sessionStorage.getItem(clave);
        arrayUsuarios.push(JSON.parse(usuario));
        contador++;
    }
    
    cargarListaUsuarios();

    arrayUsuarios.length != 0  && console.log("se han ingresado los datos");


});

//funcion cargar listado

function cargarListaUsuarios(){
    textoListado = "";
    for(const usuarios  of arrayUsuarios){
      textoListado += usuarios.nombre + "\n";
    }
  
    listaUsuarios.innerText = textoListado;

    inputSubmit.addEventListener("click", () => {
        Swal.fire({
            title: 'Compra Realizada',
            text: 'Recibiras la confirmacion por email',
            icon: 'success',
            confirmButtonText: 'PERFECTO',
            backdrop: "#0000004a",
     }) 
     });
}


//envio de formulario
form.addEventListener("submit", enviarFormulario);

function enviarFormulario(e){
    e.preventDefault();
    //crear objeto
    let usuario = new Usuarios(nombreP.value, emailP.value, consultaP.value );

    //limpiar inputs

    nombreP.value = "";
    emailP.value = "";
    consultaP.value = "";

    let idUsuario = "usuario"+contador;
    contador++;

    sessionStorage.setItem(idUsuario, JSON.stringify(usuario));
    arrayUsuarios.push(usuario);
    cargarListaUsuarios();
}

