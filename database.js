  function llenadoPantallaReal() {
    var selectPantallas = document.getElementById("pantallas");
    var inputPantallaReal = document.getElementById("pantallados");
    // Obtiene el valor seleccionado en el select de pantallas
    var valorSeleccionado = selectPantallas.value;
    // Llena el input pantallaReal con el valor seleccionado
    inputPantallaReal.value = valorSeleccionado;
    return;
}

  function llenadoPagosReal(){
    var selectPagos = document.getElementById("pagos");
    var inputPagosdos = document.getElementById("pagodos");
    // Obtiene el valor seleccionado en el select de pantallas
    var valorSeleccionado = selectPagos.value;
    // Llena el input pantallaReal con el valor seleccionado
    inputPagosdos.value = valorSeleccionado;
    
    if(selectPagos != 0){
      document.getElementById("submit").removeAttribute("disabled");
    }
    return;
  }

  function llenadorespuesta() {
    var selectrespuesta = document.getElementById("respuesta");
    var inputrta = document.getElementById("rta");
    // Obtiene el valor seleccionado en el select de pantallas
    var valorSeleccionado = selectrespuesta.value;
    // Llena el input pantallaReal con el valor seleccionado
    inputrta.value = valorSeleccionado;
    if(selectrespuesta != 0){
      document.getElementById("submit").removeAttribute("disabled");
    }
    return;
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzWX6J2qYgMThmbzWwarHbnVWHD1rLnUcWRMPoP0u0y_ExWGUHtQGkBDqTWdrAgKUqLVA/exec'

const forma = document.forms['clientesYventas'];

forma.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {method: 'POST', body: new FormData(forma)})
  .then(response => alert("¡Gracias! Sus datos se han enviado correctamente." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


