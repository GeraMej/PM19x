function simularPeticionAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos de la API recibidos correctamente");
        }, 5000); // 5 segundos
    });
}

async function obtenerDatosAPI() {
    const resultado = await simularPeticionAPI();
    console.log(resultado);
}

obtenerDatosAPI();
