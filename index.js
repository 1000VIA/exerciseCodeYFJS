const products = require("./products");
const shopingList = require("./shopingList");
const clients = require("./clients");

/**
 * Puedes crear las variables y funciones necesarias para que el sistema funcione.
 * Debe simular una compra en una tienda y arrojar el total de la compra teniendo en cuenta los siguientes descuentos:
 * León Ceballos: 5%
 * Cristian Vega: 10%
 * Jesse Cogollo: 2%
 **/


/** 
 * Requerimientos:
 * 1: Dentro de la función principal deberás imprimir la lista de productos con la cantidad restante después de la compra.
 * 2: Imprimir el valor total sin aplicar el descuento. El número debe tener dos decimales.
 * 3: Imprimir el total del descuento aplicado.
 * 4: Si no hay suficientes productos se debe agregar a la lista de compra solo los que alcancen.
 **/

// TODO: Si crees que es necesesario incluye más funciones para las pequeñas tareas

// Funciones adicionales aquí...

// TODO: Función Principal getCostList
function getCostList(client, list) {
    let shoping = 0;
    list.forEach( element => {
        const stockProduc = products.find(item => item.id === element.id)
        let quantityStock = stockProduc.quantity;
        let shopingQuantity =  element.quantity;
        let costProduct = stockProduc.cost;
        let total = costProduct * shopingQuantity;

        // console.log(total);

        if (quantityStock >= shopingQuantity) {
            shoping = shoping + (total);
            quantityStock = quantityStock - shopingQuantity;
        } else {
            shoping = shoping + (costProduct * quantityStock);
        }
        console.log('El valor de la compra es: ' + shoping, 'y La cantidad que se encuentra en stock es: ' + quantityStock);

    });

    if (client === 'Cristian Vega') {
        shoping = shoping - (shoping * 0.10);
    } else if (client === 'León Ceballos') {
        shoping = shoping - (shoping * 0.05);
    } else if (client === 'Jesse Cogollo') {
        console.log('este es mi cliente: ');
        shoping = shoping - (shoping * 0.02);
    } else {
        shoping = shoping;
        
    }
    return `El total de la compra señor ${client} es de: ${shoping.toFixed(2)}`
}

const result = getCostList(clients[0], shopingList);


// Imprime el total de la compra
 console.log(result)

/**
 * TE RECOMENDAMOS
 * 1. Primero recorre, suma y multiplica los productos de acuerdo a la cantidad
 * 2. Saca el descuento según el cliente
 * 3. Aplica el descuento  al total
 * 4. Al utilizar el console.log pon titulos a lo que imprimes
 */

/**
 * LISTA DE CHEQUEO
 * Calcular el total de la compra
 * Imprimir los productos con la  cantidad restante luego de la compra
 * Calcular el descuento
 * Imprimir el descuento
 * Aplicar descuento al total
 * Imprime el total
 */