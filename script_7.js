function sistemaPreco(){
alert("Escolha as seguintes opções de picolé:/ a chocolate/ b morango c creme/ d manga /e melancia/ f vanilla ice/ g céu azul/ h brownie/ i hawaiano: ");
let sabor = prompt("Escolha um sabor para  descobrir um preço")
switch(sabor){
    case "a":
    alert("Chocolate, preço R$1,50");
    break
    case "b":
    alert("Morango, preço R$2,50");
    break
    case "c": 
    alert("Creme, preço R$2,50");
    break
    case "d":
    alert("Manga, preço R$3,20");
    break
    case "e":
    alert("Melancia, preço R$3,40");
    break
    case "f":
    alert("Vanilla Ice, preço R$3,00");
    break
    case "g":
    alert("Céu Azul, preço R$3,60");
    break
    case "h":
    alert("Brownie, preço R$4,00");
    break
    case "i":
    alert("Hawaiano, preço R$5,00");
    default
:}

}
sistemaPreco();

