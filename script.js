//S2.1. Exercicis bàsics JavaScript
//Exercici 1.1: Arrow functions
//ex.1
console.log(" -------------- 1.1: Arrow functions | ex.1");
add = (a, b) => a + b;
console.log("Suma de 7 y 5 = ",add(7,5));


//ex.2
console.log(" -------------- 1.1: Arrow functions | ex.2");
randomNumber = () => Math.floor(Math.random() * 101);
console.log("Numero random de 0 a 100 = ",randomNumber());

//ex.3
console.log(" -------------- 1.1: Arrow functions | ex.3");
class person {
    constructor(name) { 
        this.name = name;
    }
    greet = () => console.log("Hola, " + this.name);
}
const Rodolfo = new person("Rodolfo");
Rodolfo.greet();

//ex.4
console.log(" -------------- 1.1: Arrow functions | ex.4");
printNumbers = (array) => {
    for (i=0; i<array.length; i++){
        printNumbersIsnideLopp = () => console.log(array[i]);
        printNumbersIsnideLopp();
    }
}
array=[10,20,30,40,50,60];
printNumbers(array);

//ex.5
console.log(" -------------- 1.1: Arrow functions | ex.5");
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
console.log(" --------------  1.2: Operador ternari | ex.1");
function potConduir(edad) {
   let resultado = edad > 17 ? "Pots conduir":"No pots conduir";
   return resultado;
}
console.log(potConduir(19));

//ex.2: Operador de comparación
console.log(" --------------  1.2: Operador ternari | ex.2");
comparadorNums=(num1, num2) => {
    let resultado = 
        num1 == num2 ? "Los numeros son iguales, cambia uno, anda" : num1>num2 ?  'num1 és més gran' : 'num2 és més gran';
    return resultado;
}
console.log(comparadorNums(0, 1));

//ex.3 Operador ternari enllaçats i amb funcions
console.log(" --------------  1.2: Operador ternari | ex.3");
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

//ex.4 Operador ternari amb bucle
console.log(" --------------  1.2: Operador ternari | ex.4");
function parOimpar(array){
    for (i=0; i<array.length; i++){ 
        let resultado = array[i]%2 == 0 ? "El numero "+array[i] +" es par": "El numero "+array[i] +" es impar";
        return resultado;
    }
}
array=[1,33,20206,4,0,6];
console.log(parOimpar(array));


//Exercici 1.3: Callbacks
//ex.1: callback basic
console.log(" --------------  1.3: Callbacks | ex.1");
callback = (numero) => console.log(1*numero);
function processar(nombre, callback){
    callback(nombre);
}
processar(3, callback);

//ex.2 callback + operacions matemàtiques
console.log(" --------------  1.3: Callbacks | ex.2");
function calculadora (num1, num2, callback){
    return callback(num1, num2);
}
function sumar(num1,num2){
    let suma = num1+num2;
    return num1+ " + "+ num2 + " = " + suma;
}
const resultado = calculadora(333,10,sumar);
console.log(resultado);

//ex.3 callbacks en funcions asíncrones
console.log(" --------------  1.3: Callbacks | ex.3"); 

const saludar = (nombre) => {console.log("Hola "+ nombre)};
function esperarISaludar (nombre, callback){
    setTimeout(() => callback(nombre), 2000);
}
esperarISaludar("Timmy",saludar);

//ex.4 Callbacks amb arrays
console.log(" --------------  1.3: Callbacks | ex.4"); 
saludo = () => {return "Holap"};
function processarElements (array, callback){
    for (i=0; i<array.length; i++){
        console.log(array[i], callback());
    }
}
array = [1,2,3,4,5,6,7];
processarElements(array,saludo);

//ex.5
console.log(" --------------  1.3: Callbacks | ex.5"); 
function processarCadena(string, callback){
    let enMayus = string.toUpperCase();
    callback(enMayus);
}
imprime = (string) => console.log(string);
processarCadena("esto se debe impimir en mayus", imprime);


//Exercici 1.4: Rest & Spread operators
//ex.1 Spread en Arrays
console.log(" --------------  1.4: Rest & Spread operators | ex.1");
array1 = ['esto', 'es', 'array1'];
array2 = ['aqui', 'empieza', 'array2'];
array3 = [...array1, ...array2];
console.log(array3);

//ex.2 Operador Rest en funciones
console.log(" --------------  1.4: Rest & Spread operators | ex.2");

function suma(...nums){
    let total = 0;
    for (const num of nums){
         total += num;
    }
    return total;
}

console.log("suma del array (1,2,3,4,5,10,10,10,10)=",suma(1,2,3,4,5,10,10,10,10));


//ex.3 Spread con objetos
console.log(" --------------  1.4: Rest & Spread operators | ex.3");

const objecte1 = {
    nombre: "objeto1",
    id:1,
    localidad:"canarias",
};
const objecte2 = {...objecte1};
objecte2.nombre="objeto2";
objecte2.id="2";
objecte2.localidad="Castellón";
console.log(objecte2);

//ex.4 Rest en Destructuring
console.log(" --------------  1.4: Rest & Spread operators | ex.4");

const array_ex_4 =["hola", "esto", "es", "un", "array"];
const [array4_1,array4_2, ...array4_3] = array_ex_4;
console.log(array4_3);


//ex.5 Spread en Funciones
console.log(" --------------  1.4: Rest & Spread operators | ex.5");

function spreadEnFunciones(a,b,c){
    return "a = "+a+" b = "+b+" c = "+c;
    
}
arraySpread = ["esto","va","así?"];
console.log(spreadEnFunciones(...arraySpread));


//ex.6 Fusionant Objectes amb Spread
console.log(" --------------  1.4: Rest & Spread operators | ex.6");

const objeto1 = {
    nombre : "objeto1",
    apellido : "volador",
}
const objeto2 = {
    nom : "objeto2",
    cognom : "volador no identificado",
}
const objeto3 = {...objeto1,...objeto2};
console.log(objeto3);


//Exercici 1.5: Array transformations
//ex.1 Map
console.log(" --------------  1.5: Array transformations | ex.1");
let arrayEjercicio5_1 = [1,2,3,4];
let arrayEjercicio5_1_1 = arrayEjercicio5_1.map(elevarNum);
function elevarNum(num){
    return num**2;
}
console.log(arrayEjercicio5_1_1);

//ex2 Filter
console.log(" --------------  1.5: Array transformations | ex.2");
let arrayEjercicio5_2 = arrayEjercicio5_1.filter(checkPar);

function checkPar(num){
    return num%2 == 0;
}
console.log(arrayEjercicio5_2);


//ex3 Find
console.log(" --------------  1.5: Array transformations | ex.3");

let arrayEjercicio5_3 = [1, 10 , 8, 11];
let arrayEjercicio5_3_1 = arrayEjercicio5_3.find(checkBigger);
function checkBigger(num){
    return num>10;
}
console.log(arrayEjercicio5_3_1);

//ex.4 Reduce
console.log(" --------------  1.5: Array transformations | ex.4");

let arrayEjercicio5_4 = [13, 7, 8, 21];
let arrayEjercicio5_4_1 = arrayEjercicio5_4.reduce(sumameEsta,0);
function sumameEsta(total, num){
    return total + num;
}
console.log(arrayEjercicio5_4_1);

//ex.5 Función en una sola línea
console.log(" --------------  1.5: Array transformations | ex.5");
let arrayEjercicio5_5 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];

const resultadoSumatorioChungo2 = (nums) => nums.filter(num => num > 9).reduce((total,num) => total+num*2, 0);

console.log(resultadoSumatorioChungo2(arrayEjercicio5_5));


//ex.6 Every / Some
console.log(" --------------  1.5: Array transformations | ex.6");

let arrayEjercicio5_6 = [11, 12, 13, 14];

console.log(arrayEjercicio5_6.every((num)=>num>10));
console.log(arrayEjercicio5_6.some((num)=>num>10));


//Exercici 1.6: Array loops
//ex.1 forEach
console.log(" --------------  1.6: Array loops | ex.1");

let noms = ['Anna', 'Bernat', 'Clara'];

noms.forEach(element => {
    console.log(element);
});

//ex.2 for-of
console.log(" --------------  1.6: Array loops | ex.2");
for (nom of noms){
    console.log(nom);
}

//ex.3 filter en array
console.log(" --------------  1.6: Array loops | ex.3");
let numeros = [1, 2, 3, 4, 5, 6];
let numerosFiltrados = numeros.filter(checkPar);
console.log(numerosFiltrados);

//ex.4 For-in
console.log(" --------------  1.6: Array loops | ex.4");
let obj = { 
    nom: "Ona", 
    edat: 25, 
    ciutat: 'Barcelona'
};
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        console.log(key+": "+obj[key]);
    }
}

//ex.5 For-of amb break
console.log(" --------------  1.6: Array loops | ex.5");
for (const num of numeros) {
    console.log(num);
    if(num == 5) break;   
}

//ex.6 For-of amb index
console.log(" --------------  1.6: Array loops | ex.6");

for (const nom of noms) {
    console.log("índice "+noms.indexOf(nom)+ ": "+nom);
}

//Exercici 1.7: Promises & Async/Await
//ex.1 Creació d'una Promesa
console.log(" --------------  1.7: Promises & Async/Await | ex.1");

const PromesaDeMeñique = new Promise((resolve, reject) => {
    setTimeout(()=>{resolve(console.log("Hola, món"));},2000);
});

//ex.2 Utilització d'una Promesa
console.log(" --------------  1.7: Promises & Async/Await | ex.2");
PromesaDeMeñique.then((result) => {
    console.log("tenemos una promesa de meñique",result);
}).catch((error) => {
    console.error("ups",error);
});
