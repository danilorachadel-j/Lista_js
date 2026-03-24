function parImpar() {

let numero1 = parseFloat(prompt("digite um número inteiro: "));
let numero2 = 0;
while(numero1)

    if( numero1 % 2 === 0) {
    alert("O número é par: ");
    numero2 = numero1 + 1;
    alert ("Agora é impar: " + numero2);


    }else{
        alert("O número é impar: ");
        numero2 = numero1 + 1;
        alert ("Agora é par: " + numero2);
    }else{
        alert("Digite um número válido por favor.");
    }


}
parImpar();