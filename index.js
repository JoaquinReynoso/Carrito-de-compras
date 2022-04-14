const boton = document.getElementById("boton-entrar");
boton.addEventListener("click", () => {
    Swal.fire({
        title: 'Vas a ingresar',
        text: 'Estas listo?',
        icon: 'success',
        confirmButtonText: 'Ingresar',
        backdrop: "#0000004a",
        allowOutsideClick: false,
      }).then( (resultado) => {
        console.log(resultado);
        window.location.href = "./carrito.html";
      });

    
});