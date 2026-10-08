let idade = 18;

if (idade < 16) {
    console.log("Não");
} else if (idade >= 16 && idade <= 17) {
    console.log("16-17");
} else {
    console.log("Pode");
} 


let idade = 18;

let mensagem = idade >= 18 ? "Pode" : "Não";

console.log(mensagem); 


let color = "vermelho";

switch (color) {
    case "vermelho":
        console.log("Pare");
        break;

    case "amarelo":
        console.log("Atenção");
        break;

    case "verde":
        console.log("Siga");
        break;
} 

let numero = 7;

if (numero % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
} 

let nota = 8;

if (nota >= 9) {
    console.log("A");
} else if (nota >= 7) {
    console.log("B");
} else if (nota >= 5) {
    console.log("C");
} else {
    console.log("D");
} 

for (let i = 0; i < 5; i++) {
    console.log(i);
} 

let frutas = ["uva", "pera", "maçã"];

for (let fruta of frutas) {
    console.log(fruta);
} 

let j = 0;

while (j < 3) {
    console.log(j);
    j++;
} 


for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
} 
