function sumar(a, b) {
    try {
        if (typeof a != 'number' || typeof b != 'number') {
            throw "Solo se aceptan argumentos de tipo numérico.";
        }
        else {
            return a + b;
        }
    } catch (error) {
        return error;
    }
}
