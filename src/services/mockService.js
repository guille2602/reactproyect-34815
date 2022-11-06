import products from '../data/stockData'

/* Emulación respuesta BACK-END*/

function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  }

  export default getItems;