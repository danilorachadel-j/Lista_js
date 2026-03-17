
console.log("Olá mundo");

let nome = ("Danilo");
let idade = 17;
let peso = 87.4;
let sabe = "true";

console.log("Meu nome é " + nome);

function somarNumeros(){
let soma = 0;
let continuar = true;

while(continuar){
    
    let numero = parsefloat(prompt("Digite um número(ou dígite '0' para continuar" ));

    if(isNaN(numero)){
        
        alert("Por favor digite um número valido");

}else{
     soma += numero;
}
continuar = confirm("deseja adicionar mais números?");

};

};

somarNumeros();