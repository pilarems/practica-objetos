//Función convertir en minúsculas y sin tildes
function limpiaLetra(letra_bruta) {
    let letra_a_limpiar = letra_bruta.toLowerCase();
    let letra_limpia = '';
    switch (letra_a_limpiar) {
        case 'á':
        case 'à':
        case 'ä':
            letra_limpia = 'a';
            break;
        case 'é':
        case 'è':
        case 'ë':
            letra_limpia = 'e';
            break;
        case 'í':
        case 'ì':
        case 'ï':
            letra_limpia = 'i';
            break;
        case 'ó':
        case 'ò':
        case 'ö':
            letra_limpia = 'o';
            break;
        case 'ú':
        case 'ù':
        case 'ü':
            letra_limpia = 'u';
            break;
        default:
            letra_limpia = letra_a_limpiar;
            break;
    }

    return letra_limpia
}

//Validación de texto (limpia el texto de espacios redundantes y comprueba que la cadena tenga al menos tres caracteres)
function validaTxt(texto) {
    let txt_limpio = texto.trim()
    while (txt_limpio.indexOf('  ') != -1) {
        txt_limpio = txt_limpio.replaceAll('  ', ' ');
    }
    if (txt_limpio.length < 3) {
        return false;
    }
    return txt_limpio;
}

//Validación de texto (limpia el texto de espacios redundantes)
function textoTrim(texto) {
    let txt_limpio = texto.trim()
    while (txt_limpio.indexOf('  ') != -1) {
        txt_limpio = txt_limpio.replaceAll('  ', ' ');
    }
    return txt_limpio;
}

//funcion para crear un nodo a partir de 3 parámetros: tipo de nodo, clase css y contenido
function creaNodo(tipo, clase, contenido) {
    if (tipo === null || tipo === '') {
        tipo = 'span';
    }
    let nodo = document.createElement(tipo);
    nodo.className = clase;
    nodo.textContent = contenido;
    return nodo;

}

function aleatorioEntre(min, max) {
    //no es necesario comprobar la diferencia entre los parámetros 
    if (isNaN(min) || isNaN(max) || max === null || min === null) {
        return false;
    }

    let rango = max - min;
    let aleatorio = Math.random() * rango;
    let suma = aleatorio + min;
    let redondeo = Math.floor(suma);
    return redondeo;
}

//ordenar un array de 1 dimensión en ambos sentidos (si es ascendente, orden = 1, si es descendenete = -1)
function ordenaArray(datos, orden) {
    datos.sort((a, b) => {
        if (a === b) {
            return 0;
        } else {
            return (a > b ? 1 : -1) * orden;
        }
    })
    return datos;
}

//La función recibe un array de dos dimensiones para ser ordenado, el segundo parámetroindica la columna por la cual queremos ordenar los datos, y el tercero si el orden es ascendente y descendente
function ordenaArrayMulti(datos, campo, orden) {
    datos.sort((a, b) => {
        if (a[campo] === b[campo]) {
            return 0
        } else {
            return (a[campo] > b[campo] ? 1 : -1) * orden

        }
    })
}