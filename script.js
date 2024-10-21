//S2.1. Exercicis bàsics JavaScript
//ex.1
add = (a, b) => a + b;
console.log("Suma de 7 y 5 = ",add(7,5));

//ex.2
randomNumber = () => Math.floor(Math.random() * 101);;
console.log("Numero random de 0 a 100 = ",randomNumber());

//ex.3
class person {
    constructor(name) { 
        this.name = name;
    }
    greet = () => console.log("Hola, " + this.name);
}
const Rodolfo = new person("Rodolfo");
Rodolfo.greet();

//ex.4
printNumbers = (array) => {
    for (i=0; i<array.length; i++){
        printNumbersIsnideLopp = () => console.log(array[i]);
        printNumbersIsnideLopp();
    }
}
array=[10,20,30,40,50,60];
printNumbers(array);

//ex.5
mensajeRetrasado = () => {
    console.log("Hola");
    imprimir = ()=> console.log("No tengo wifi");
    imprimir2 = ()=> console.log("Luego nos vemos");
    setTimeout(imprimir, 3000);
    setTimeout(imprimir2, 5000);
}
mensajeRetrasado();

//Exercici 1.2: Operador ternari
//ex.1: ternario básico
function potConduir(edad) {
   let resultado = edad > 17 ? "Pots conduir":"No pots conduir";
   return resultado;
}
console.log(potConduir(19));

//ex.2: Operador de comparación
comparadorNums=(num1, num2) => {
    let resultado = 
        num1 == num2 ? "Los numeros son iguales, cambia uno, anda" : num1>num2 ?  'num1 és més gran' : 'num2 és més gran';
    return resultado;
}
console.log(comparadorNums(0, 1));

//ex.3
tipoNum = (num) => {
    let resultado = 
        num == 0 ? "El num és 0" : 
        num > 0 ?  'El num és positiu' : 'El num és negatiu';
    return resultado;
}
console.log(tipoNum(-1));

trobarMaxim = (a, b, c) => {
    let numMax =
        a > b & a >c ? "El num A:"+ a + " es el mayor":
        b > a & b >c ? "El num B:"+ b + " es el mayor":
        "El num C:"+ c + " es el mayor";
    return numMax;
}
console.log(trobarMaxim(-6,-10,-3));