const valorCompra = 150;
const cidade = "Fortaleza";

if (valorCompra >= 200) {
    console.log("Frete grátis");
} else if (cidade === "Sobral") {
    console.log("Frete: R$ 10");
} else {
    console.log("Frete: R$ 25");
}