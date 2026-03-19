
console.log("Olá mundo");

let nome = ("Danilo");
let idade = 17;
let peso = 87.4;
let sabe = "true";

console.log("Meu nome é " + nome);

function somarNumeros() {
let soma = 0;
let continuar = true;

while(continuar){
    
    let numero = parseFloat(prompt("Digite um número(ou dígite '0' para continuar" ));

    if(isNaN(numero)) {
soma += numero;

}else{
     soma += numero;
             alert("Por favor digite um número valido");

}
continuar = confirm("deseja adicionar mais números?");

}
alert ("A soma dos números é; "+ soma);
}

somarNumeros();