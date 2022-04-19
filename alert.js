function eliminarUltimo(array) {
    if (typeof array != 'object') {
        console.log('El parámetro no es un array.');
    }
    else if (!array.length) {
        console.log('El array está vacío.');
    }
    else {
        array.pop();
        console.log(array);
    }
}
