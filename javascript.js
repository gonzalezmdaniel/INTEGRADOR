const seleccion = document.getElementById('seleccion');
const inputCantidad = document.getElementById('inputCantidad');
const total = document.getElementById('total');
const costoTicket=200;
const btnResumen = document.getElementById('btnResumen');

btnResumen.onclick = calcular;

function calcular(){
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


}