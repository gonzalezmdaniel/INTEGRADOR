const seleccion = document.getElementById('seleccion');
const inputCantidad = document.getElementById('inputCantidad');
const total = document.getElementById('total');
const costoTicket=200;

seleccion.oninput = calcular;
inputCantidad.onchange = calcular;

function calcular(){
    console.log(seleccion.value);
    total.innerHTML='PRUEBA';

    let cantidad = parseInt(inputCantidad.value);
    console.log('la cantidad es: $ '+cantidad);
    if(cantidad>0){
        let porcentaje=0;
        switch (seleccion.value) {
            case 'Estudiante': porcentaje = 80;
              break;
            case 'Trainee': porcentaje=50;
              break;
            case 'Junior': porcentaje=15;
              break;
          }
          console.log('la porcentaje: '+porcentaje)
          let elTotal = (costoTicket*cantidad);
          console.log("entradas: "+elTotal);
          let descuento=(porcentaje*elTotal)/100;
          elTotal=elTotal-descuento;
          console.log("descuento: "+porcentaje+ " % , total: "+elTotal)
          total.innerHTML='Total a Pagar: $ ';
          total.innerHTML+=elTotal;
        
    }




    /*
    inputCantidad = document.getElementById('inputCantidad').innerHTML;
    inputCantidad = parseInt(inputCantidad);
    seleccion = document.getElementById('seleccion').innerHTML;
    let porcentaje=0;
    switch (seleccion) {
        case 'Estudiante': porcentaje = 80;
          break;
        case 'Trainee': porcentaje=50;
          break;
        case 'Junior': porcentaje=15;
          break;
      }
    let resultado =   
    */
}



/*
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type=text]').forEach( node => node.addEventListener('keypress', e => {
      if(e.keyCode == 13) {
        e.preventDefault();
      }
    }))
  });
*/
