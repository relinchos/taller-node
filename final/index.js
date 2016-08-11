'use strict';
const btc = require('./btc');
const notifications = require('./notification');

const buyPrice = 589
const email = 'contacto.quinteros@gmail.com'

const checkBTC = () =>  {
  console.log('Chequeando el precio del bitcoin...')
  btc.getPrice(function(error, price){
    if(error){
      return console.log(error)
    }
    console.log('El precio actual es: ',price, ' USD')
    if (price <= buyPrice) {
      notifications.sendEmail({ email, price });
    } else{
      console.log('No lo compramos por ahora...')
    }
  });
}

checkBTC()
setInterval(checkBTC, 1000 * 30) // Cada 30 segundos chequear precio bitcoin...

