import {createContext, useState, React} from "react";

export const cartContext = createContext();

export function convertToARSMoneyFormat (num) {
        num = num.toLocaleString('es-AR', {
        style:'currency',
        currency:'ARS',
        maximumFractionDigits:0});
        return num;
}

export function CartContextProvider ({children}) {
    
    //El carrito debe contener un array de objetos (productos y cantidad)
    const [cart, setCart] = useState([]);

    //Agregar cierta cantidad de un item al carrito
    function addItem(item, quantity) {
        //Copiar el cart existente para no modificarlo directamente
        const newCart = [...cart];
        //Revisar si el item existe en el array
        if (isInCart(item.id)) {
            //Si existe buscar y modificar la cantidad
            const position = newCart.findIndex(search => search.id === item.id);
            newCart[position].quantity = quantity;
        } else {
            //Si no existe pushear el product y la cantidad
            item.quantity = quantity;
            newCart.push(item);
        }
        setCart(newCart);
    };

    //Remover un item del cart usando su id - *** FALTA TERMINAR ***
    function removeItem(itemId) {
        let newCart = [];
        cart.forEach((item) => {
            item.id !== itemId && newCart.push(item)
        })
        setCart(newCart);
    };

    //Remover todos los items
    function clear() {
        const emptyCart = []; 
        setCart(emptyCart);
    };

    //Devuelve true o false
    function isInCart(id) {
        const searchResult = cart.some( item => item.id === id);
        return searchResult;
    };

    //Consultar items en el carrito.
    function cartCount () {
        let counter = 0;
        cart.map(item => counter += item.quantity)
        return counter;
    }

    function cartTotalPrice () {
        let counter = 0;
        cart.map(item => counter = counter + parseInt(item.quantity) * parseInt(item.precio))
        return counter;
    }

    //Devuelve la cantidad que hay de un producto, si no hay devuelve -1
    function itemQuantity (id) {
        let itemToFind = cart.find((prod) => prod.id === id);
        let quantity = itemToFind === undefined? 0: itemToFind.quantity; 
        return quantity;
    }

    return (
        <cartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, cartCount, itemQuantity, cartTotalPrice}}>
            {children}
        </cartContext.Provider>
    )
}