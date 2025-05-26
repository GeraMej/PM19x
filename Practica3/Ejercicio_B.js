function verificaUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === 'admin') {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}


verificaUsuario('admin')
    .then(res => console.log(res))      
    .catch(err => console.error(err));  

verificaUsuario('Gerardo')
    .then(res => console.log(res))      
    .catch(err => console.error(err));  
