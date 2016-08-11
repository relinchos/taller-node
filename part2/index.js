'use strict';
const key = 'key-82e6d10dbc040e572b2191e7bb3f88ad'
const Mailgun = require('mailgun').Mailgun;
const mg = new Mailgun(key);

const sendEmail = ({ email = 'contacto.quinteros@gmail.com', price }) => {
  mg.sendText('bitcoin_bot@domain_fake.com', [email], // Remitente, destinatarios
    'Bajo el bitcoin!', // Asunto
    `Rapido!!, el bitcoin bajo a ${price} usd, COMPRAR COMPRAR COMPRAR`, // Mensaje
    'bitcoin_bot@domain_fake.com', {}, 
    function(err) {
      if (err) console.log('Erro al enviar email: ' + err);
      else     console.log('Email enviado!');
  });
}

sendEmail({ email: 'contacto.quinteros@gmail.com', price: 500 })
