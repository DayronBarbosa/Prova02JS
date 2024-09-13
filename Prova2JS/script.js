const nome = prompt("Digite o seu nome:");
const altura = parseFloat(prompt("Digite sua altura:"));
const peso = parseFloat(prompt("Digite seu peso:"));

// Converter altura de centímetros para metros
const alturaM = altura / 100;

// Calcular o IMC
const imc = peso / (alturaM * alturaM);

// Classificar o IMC
let classificacao;
if (imc < 16) {
    classificacao = "Baixo peso muito grave";
} else if (imc >= 16 && imc < 17) {
    classificacao = "Baixo peso grave";
} else if (imc >= 17 && imc < 18.5) {
    classificacao = "Baixo peso";
} else if (imc >= 18.5 && imc < 25) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc < 30) {
    classificacao = "Sobrepeso";
} else if (imc >= 30 && imc < 35) {
    classificacao = "Obesidade grau I";
} else if (imc >= 35 && imc < 40) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III";
}

console.log(`Nome: ${nome}`);
console.log(`IMC: ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);