for (let numero = 1; numero <= 15; numero++) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("Caixa " + numero + ": combo");
    } else if (numero % 3 === 0) {
        console.log("Caixa " + numero + ": queijo");
    } else if (numero % 5 === 0) {
        console.log("Caixa " + numero + ": iogurte");
    } else {
        console.log("Caixa " + numero);
    }
}

