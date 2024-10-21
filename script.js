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