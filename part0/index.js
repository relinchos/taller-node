const buyPrice = 500;

const getBitcoinPrice = () =>  {
  const prices = [600,500,400,200,1000]
  return prices[Math.floor(Math.random() * prices.length)]
}

const sendNotification = () => {
  console.log('el bitcoin bajo!! comprar comprar!!')
}

const checkBTC = () =>  {
  console.log('Chequeando el precio del bitcoin...')
  const price = getBitcoinPrice();
  console.log('El precio actual es: ',price, ' USD')
  if (price <= 500) {
    sendNotification();
  } else{
    console.log('No lo compramos por ahora...')
  } 
}
setInterval(checkBTC, 1000 * 2) // Cada 2 segundos chequear precio bitcoin...

