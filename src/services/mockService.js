import products from '../data/stockData'

/* Emulación respuesta BACK-END*/

function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  }

  export function getItem(itemid) {
    const requested = products.find((prod)=> prod.id === parseInt(itemid));
    return new Promise((resolve, reject) => {
      requested === undefined && reject("Not found");
      setTimeout(() => {
        resolve(requested);
      }, 2000);
    });
  }
  
  export default getItems;
  