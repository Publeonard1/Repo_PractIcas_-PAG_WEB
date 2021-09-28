//Se crea variables
let carrito = []; //El carrito se pone afuera porque si se integra a la funcion, en el momento de que se oprima el botón vacía el valor
let total = 0; //Se inicializa en 0

// Luego se hace una función donde me muestre el precio total del carrito 
function agregarAlCarrito(nombre_producto, precio_producto) {
    //alert(nombre_producto + ' $' + precio_producto); // Como prueba para ver si esta llamando los parametros de esta función
    //Se comenta el alert de prueba 
    let producto = { nombre: nombre_producto, precio: precio_producto }; // Se hace una lista para asignar los atributos de la función a las claves
    // Aquí vienen los arreglos. Cuando utilizamos los arreglos vienen los métodos push
    carrito.push(producto); //Ese push se integra el diccionario o lista producto en este caso carrito = [];
    //Vamos a observa por consola que me muestre el carrito 
    console.log(carrito);
    // Ahora quiero que por consola me muestre la posición 1 del carrito
    console.log(carrito[1].nombre);
    /* Hacer otra función que me recorra el arreglo y me lea el nombre de cada uno de los productos y para esto en la 
    pagina se hace un nuevo div al final de las tarjetas de pordrutos un contador donde me sume los porductos selecionados
    Hay dos opciones de lógica:
    1. Recorrer con un for el carrito
    2. Obtener cada uno de los elemntos de precio*/
    total = total + precio_producto; // Este es un acumulador 
    total_carrito.innerText = '$' + total; // Se llama el id="total_carrito" para asiganrolo con $ y la variable total

}