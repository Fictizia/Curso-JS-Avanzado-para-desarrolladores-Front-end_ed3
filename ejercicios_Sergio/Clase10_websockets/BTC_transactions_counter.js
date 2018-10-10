// 1 - Utilizaremos la API de Blockchain.info para mostrar la informaión en tiempo real de las transacciones de Bitcoins.

// Blockchain AP
// https://blockchain.info/es/api
// Exchange Rates API
// https://blockchain.info/es/api/exchange_rates_api
// Bitcoin Websocket API
// https://blockchain.info/es/api/api_websocket

// Detalles importantes:

// Suscribete a "unconfirmed_sub" y "blocks_sub"
// Filtra las operaciones tipo "utx"
// Convierte los Satoshis en Bitcoins.  https://aulabitcoin.com/basicos/que-es-un-satoshi/
// 1 BTC = 100,000,000 Satoshi
// Consejos:

// Puedes habilitar cors en la api de exchange rate con https://blockchain.info/es/ticker?cors=true.
// {response}.op nos permite filtrar por tipo de operación.
// {response}.x.out nos permite conocer todos los segmentos disponibles y concatenar sus valores {response}.x.out[{i}].value.
// Recuerda que los segmentos estan en Satoshis y debemos convertirlos a BTC.