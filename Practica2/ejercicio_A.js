const persona = {
    nombre: "Gerardo",
    edad: 25,
    direccion:{
        ciuddad: "Qro",
        pais: "Mexico",
    }
};

const nombre = persona.nombre;
const edad = persona.edad;
const ciudad = persona.direccion.ciudad;
const pais = persona.direccion.pais;

console.log(`Me llamo:${nombre}, tengo ${edad} años y vivo en ${ciudad}, ${pais}.`);