'use strict';
const http = require('http')

const btcApi = 'http://api.coindesk.com/v1/bpi/currentprice.json';

http.get(btcApi, (stream) => {
  let respuesta = '';

  // La respuesta del GET devuelve un Stream.
  // Cuando el stream recive el evento 'data', 
  // agregamos el chunk de datos a la respuesta final.
  stream.on('data', function (chunk) {
    respuesta += chunk;
  });

  // Una vez terminado el flujo de datos, mostramos por pantalla la respuesta
  stream.on('end', function () {
    console.log("El precio del bitcoin es: ");
    console.log(JSON.parse(respuesta).bpi.USD.rate_float);
  });

}).on('error', (e) => {
  console.log(`Hubo un error: ${e.message}`);
});