export const removerAcentos = (texto) => {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

export const possuiTexto = (texto, textoProcurado) => {
    if (!texto || !textoProcurado) {
        return texto === textoProcurado;
    }

    const textoSemAcentos = removerAcentos(texto);
    const textoProcuradoSemAcentos =  removerAcentos(textoProcurado);  

    return textoSemAcentos
        .toLowerCase()
        .includes(textoProcuradoSemAcentos.toLowerCase());
}

export const textoIgual = (texto, textoProcurado) => {
    if (!texto || !textoProcurado) {
        return texto === textoProcurado;
    }

    const textoSemAcentos = removerAcentos(texto);
    const textoProcuradoSemAcentos =  removerAcentos(textoProcurado);  

    return textoSemAcentos.toLowerCase() 
        === textoProcuradoSemAcentos.toLowerCase();
}