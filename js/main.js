function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://www.google.com/");
    window.location.href="https://www.google.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar Texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}
/* variavel local e global
var validar = 0;

function validaIdade(idade){

    if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

/* Função
function soma(n1,n2){
    return n1 + n2;
}
alert(soma(10,4));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome,novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/* Date
var d = new Date();
alert(d.getMonth());
alert(d.getTimezoneOffset());
alert(d.getUTCDay());
alert(d.getTime());
alert(d.getFullYear());
*/

/* For
var count;
for (count=0;count <=5; count++) {
    alert(count);
    console.log(count);
}
*/

/* while
var count = 0;

while (count <= 5){
    console.log(count);
    count++;
}
*/

/* If e Prompt
var idade = prompt("Qual sua idade?");

if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}
*/

/* Array e dicionário
var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);

var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

// variaveis e Arrays
//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Rafael";
//var n1 = 30;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + n1 + " anos");
//alert(n1 + n22);
//console.log(nome);
//console.log(n1*n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil"));

