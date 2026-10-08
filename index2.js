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