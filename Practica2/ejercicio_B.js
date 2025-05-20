const productos = [
    {nombre: "Laptop", precio: 1200},
    {nombre:"Mause", precio: 250},
    {nombre:"Teclado", precio: 300},
    {nombre:"Monitor", precio: 3000}
]

const nombresRequeridos = productos.filter(producto => producto.precio > 1000).map(producto => producto.nombre);
console.log(nombresRequeridos);