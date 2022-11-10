import products from '../data/stockData'

/* Emulación respuesta BACK-END*/

function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  }

  export function getItem() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products[1]);
      }, 2000);
    });
  }
  
  export default getItems;
  