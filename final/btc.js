'use strict';
const http = require('http')

const btcApi = 'http://api.coindesk.com/v1/bpi/currentprice.json';

const getPrice = (callback) => {
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
      const price = JSON.parse(respuesta).bpi.USD.rate_float;
      return callback(null, price)
    });

  }).on('error', (e) => {
    console.log(`Hubo un error: ${e.message}`);
    return callback(e, null);
  });
}

module.exports = {
  getPrice,
}