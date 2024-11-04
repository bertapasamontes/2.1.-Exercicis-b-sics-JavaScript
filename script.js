//S2.1. Exercicis bàsics JavaScript
//Exercici 1.1: Arrow functions
//ex.1
console.log(" -------------- 1.1: Arrow functions | ex.1");

let boton_1_1_1 = document.getElementById("enviar-1_1-1");
let result_1_1_1 = document.getElementById("result_1.1_1");

add = (a, b) => a + b;
boton_1_1_1.addEventListener("click", () => {
  let a_Input1_1 = parseFloat(document.getElementById("1.1_input_a").value);

  let b_Input1_1 = parseFloat(document.getElementById("1.1_input_b").value);

  add(a_Input1_1, b_Input1_1);

  result_1_1_1.textContent =
    a_Input1_1 + " + " + b_Input1_1 + " = " + add(a_Input1_1, b_Input1_1);
});

//ex.2
console.log(" -------------- 1.1: Arrow functions | ex.2");

//en consola
randomNumber = () => Math.floor(Math.random() * 101);
console.log("Numero random de 0 a 100 = ", randomNumber());

//en web
let result_1_1_2 = document.getElementById("result_1.1_2");

let numeroAleatorio = document.getElementById("randomNumber");

numeroAleatorio.addEventListener("click", () => {
  let randomNumber = () => Math.floor(Math.random() * 101);

  result_1_1_2.textContent = "Random Number = " + randomNumber();
});

//ex.3
console.log(" -------------- 1.1: Arrow functions | ex.3");
//en consola
class person {
  constructor(name) {
    this.name = name;
  }
  greet = () => console.log("Hola, " + this.name);
}
const Rodolfo = new person("Rodolfo");
Rodolfo.greet();

//en web
const result_1_1_3 = document.getElementById("result_1.1_3");
let boton_1_1_3 = document.getElementById("enviar-1_1-3");

boton_1_1_3.addEventListener("click", () => {
  const nombrePersona = document.getElementById("nombre_persona").value;
  class person {
    constructor(name) {
      this.name = name;
    }
    greet = () => "Hola, " + this.name;
  }
  const personaNueva = new person(nombrePersona);
  let saludo = personaNueva.greet();

  result_1_1_3.textContent = saludo;
});

//ex.4
console.log(" -------------- 1.1: Arrow functions | ex.4");

//en consola
printNumbers = (array) => {
  for (i = 0; i < array.length; i++) {
    printNumbersIsnideLopp = () => console.log(array[i]);
    printNumbersIsnideLopp();
  }
};
array = [10, 20, 30, 40, 50, 60];
printNumbers(array);

//en web
let boton_1_1_4 = document.getElementById("enviar-1_1-4");
const result_1_1_4 = document.getElementById("result_1.1_4");

boton_1_1_4.addEventListener("click", () => {
  const inputDeNums = document.getElementById("1.1_array").value;
  const array = inputDeNums.split(",").map((num) => Number(num.trim()));
  printNumbers = (array) => {
    result_1_1_4.textContent = "Array de números: ";
    for (i = 0; i < array.length; i++) {
      printNumbersIsnideLopp = () => array[i];
      const numerito = document.createElement("p");
      numerito.textContent = array[i];
      result_1_1_4.appendChild(numerito);
    }
  };
  printNumbers(array);
});

//ex.5
console.log(" -------------- 1.1: Arrow functions | ex.5");
//en consola
mensajeRetrasado = () => {
  console.log("Hola");
  imprimir = () => console.log("No tengo wifi");
  imprimir2 = () => console.log("Luego nos vemos");
  setTimeout(imprimir, 3000);
  setTimeout(imprimir2, 5000);
};
mensajeRetrasado();

//en web
let boton_1_1_5 = document.getElementById("enviar-1_1-5");
const result_1_1_5 = document.getElementById("result_1.1_5");
boton_1_1_5.addEventListener("click", () => {
  const Input1_1_51 = document.getElementById("1.1_input1").value;
  const Input1_1_52 = document.getElementById("1.1_input2").value;
  mensajeRetrasado = () => {
    result_1_1_5.textContent = "reproduciendo mensaje:";
    setTimeout(() => {
      const input1 = document.createElement("p");
      input1.textContent = Input1_1_51;
      result_1_1_5.appendChild(input1);
    }, 3000);

    setTimeout(() => {
      const input2 = document.createElement("p");
      input2.textContent = Input1_1_52;
      result_1_1_5.appendChild(input2);
    }, 5000);
  };
  mensajeRetrasado();
});

//Exercici 1.2: Operador ternari
//ex.1: ternario básico
console.log(" --------------  1.2: Operador ternari | ex.1");
function potConduir(edad) {
  let resultado = edad > 17 ? "Pots conduir" : "No pots conduir";
  return resultado;
}
console.log(potConduir(19));

//en web
let boton_1_2_1 = document.getElementById("enviar-1_2-1");
const result_1_2_1 = document.getElementById("result_1.2_1");

boton_1_2_1.addEventListener("click", () => {
  const input1_2_edad = document.getElementById("1.2_edad").value;
  function potConduir(edad) {
    let resultado_1_2_1 = edad > 17 ? "Pots conduir" : "No pots conduir";
    result_1_2_1.textContent = resultado_1_2_1;
  }
  potConduir(input1_2_edad);
});

//ex.2: Operador de comparación
console.log(" --------------  1.2: Operador ternari | ex.2");
comparadorNums = (num1, num2) => {
  let resultado =
    num1 == num2
      ? "Los numeros son iguales, cambia uno, anda"
      : num1 > num2
      ? "num1 és més gran"
      : "num2 és més gran";
  return resultado;
};
console.log(comparadorNums(0, 1));

//en web
let boton_1_2_2 = document.getElementById("enviar-1-2_2");
const result_1_2_2 = document.getElementById("result_1.2_2");

boton_1_2_2.addEventListener("click", () => {
  const input1_2_1 = document.getElementById("1.2_input1").value;
  const input1_2_2 = document.getElementById("1.2_input2").value;

  comparadorNums = (num1, num2) => {
    let resultado_1_2_2 =
      num1 == num2
        ? "Los numeros son iguales, cambia uno, anda"
        : num1 > num2
        ? "num1 és més gran"
        : "num2 és més gran";
    result_1_2_2.textContent = resultado_1_2_2;
  };
  comparadorNums(input1_2_1, input1_2_2);
});

//ex.3 Operador ternari enllaçats i amb funcions
//consola
console.log(" --------------  1.2: Operador ternari | ex.3");
tipoNum = (num) => {
  let resultado =
    num == 0
      ? "El num és 0"
      : num > 0
      ? "El num és positiu"
      : "El num és negatiu";
  return resultado;
};
console.log(tipoNum(-1));

trobarMaxim = (a, b, c) => {
  let numMax =
    (a == b) & (a == c)
      ? "Los 3 números son el mismo, cambia uno anda :)"
      : (a > b) & (a > c)
      ? "El num A:" + a + " es el mayor"
      : (b > a) & (b > c)
      ? "El num B:" + b + " es el mayor"
      : "El num C:" + c + " es el mayor";
  return numMax;
};
console.log(trobarMaxim(-6, -10, -3));

//en web
//tipo num
let boton_1_2_3 = document.getElementById("enviar-1-2_3");
const result_1_2_3 = document.getElementById("result_1.2_3");

boton_1_2_3.addEventListener("click", () => {
  const input1_2_3 = document.getElementById("1.2_input3").value;

  tipoNum = (num) => {
    let resultado_1_2_3 =
      num == 0
        ? "El num és 0"
        : num > 0
        ? "El num és positiu"
        : "El num és negatiu";
    result_1_2_3.textContent = resultado_1_2_3;
  };
  tipoNum(input1_2_3);
});

//maxim
let boton_1_2_32 = document.getElementById("enviar-1-2_3-2");
const result_1_2_32 = document.getElementById("result_1.2_3-2");

boton_1_2_32.addEventListener("click", () => {
  const input1_2_32 = document.getElementById("1.2_input32").value;
  const input1_2_33 = document.getElementById("1.2_input33").value;
  const input1_2_34 = document.getElementById("1.2_input34").value;

  trobarMaxim = (a, b, c) => {
    let numMax =
      (a == b) & (a == c)
        ? "Los 3 números son el mismo, cambia uno anda :)"
        : (a > b) & (a > c)
        ? "El num A: " + a + " es el mayor"
        : (b > a) & (b > c)
        ? "El num B: " + b + " es el mayor"
        : "El num C: " + c + " es el mayor";
    result_1_2_32.textContent = numMax;
  };
  trobarMaxim(input1_2_32, input1_2_33, input1_2_34);
});

//ex.4 Operador ternari amb bucle
//en consola
console.log(" --------------  1.2: Operador ternari | ex.4");
function parOimpar(array) {
  let resultados = [];
  for (i = 0; i < array.length; i++) {
    let resultado =
      array[i] % 2 == 0
        ? "El numero " + array[i] + " es par"
        : "El numero " + array[i] + " es impar";
    resultados.push(resultado);
  }
  return resultados;
}
array = [1, 33, 20206, 4, 0, 6];
console.log(parOimpar(array));

//en web
let boton_1_2_4 = document.getElementById("enviar-1-2_4");
const result_1_2_4 = document.getElementById("result_1.2_4");

boton_1_2_4.addEventListener("click", () => {
  const input1_2_4 = document.getElementById("1.2_4-array").value;
  const array1_2_4 = input1_2_4.split(",").map((num) => Number(num.trim()));

  function parOimpar(array) {
    let resultados_1_2_4 = [];

    for (i = 0; i < array.length; i++) {
      let resultado =
        array[i] % 2 == 0
          ? "El numero " + array[i] + " es par"
          : "El numero " + array[i] + " es impar";
      resultados_1_2_4.push(resultado);

      const frasecita = document.createElement("p");
      frasecita.textContent = resultado;
      result_1_2_4.appendChild(frasecita);
    }
  }
  parOimpar(array1_2_4);
});

//Exercici 1.3: Callbacks
//ex.1: callback basic
console.log(" --------------  1.3: Callbacks | ex.1");
//en consola
callback = (numero) => console.log(2 * numero);
function processar(numerito, callback) {
  callback(numerito);
}
processar(3, callback);

//en web
let boton_1_3_1 = document.getElementById("enviar-1-3_1");
const result_1_3_1 = document.getElementById("result_1.3_1");

boton_1_3_1.addEventListener("click", () => {
  const input1_3_1 = document.getElementById("1.3_1").value;

  callback = (num) => 2 * num;
  function processar(numerito, callback) {
    return callback(numerito);
  }
  let numFinal = processar(input1_3_1, callback);
  result_1_3_1.textContent = numFinal;
});

//ex.2 callback + operacions matemàtiques
console.log(" --------------  1.3: Callbacks | ex.2");
//consola
function calculadora(num1, num2, callback) {
  return callback(num1, num2);
}
function sumar(num1, num2) {
  let suma = num1 + num2;
  return num1 + " + " + num2 + " = " + suma;
}
const resultado = calculadora(333, 10, sumar);
console.log(resultado);

//en web
let boton_1_3_2 = document.getElementById("enviar-1-3_2");
const result_1_3_2 = document.getElementById("result_1.3_2");

boton_1_3_2.addEventListener("click", () => {
  const input1_3_21 = Number(document.getElementById("1.3_2-1").value);
  const input1_3_22 = Number(document.getElementById("1.3_2-2").value);
  result_1_3_2.textContent = "resultado de la suma:";
  function calculadora(num1, num2, callback) {
    return callback(num1, num2);
  }
  function sumar(num1, num2) {
    let suma = num1 + num2;
    let outputSuma = document.createElement("p");
    outputSuma.textContent = num1 + " + " + num2 + " = " + suma;
    result_1_3_2.appendChild(outputSuma);
    return suma;
  }
  const resultado_1_3_2 = calculadora(input1_3_21, input1_3_22, sumar);
});

//ex.3 callbacks en funcions asíncrones
console.log(" --------------  1.3: Callbacks | ex.3");

//consola
const saludar = (nombre) => {
  console.log("Hola " + nombre);
};
function esperarISaludar(nombre, callback) {
  setTimeout(() => callback(nombre), 2000);
}
esperarISaludar("Timmy", saludar);

//en web
let boton_1_3_3 = document.getElementById("enviar-1-3_3");
const result_1_3_3 = document.getElementById("result_1.3_3");

boton_1_3_3.addEventListener("click", () => {
  result_1_3_3.textContent = "Procesando nombre";
  let input1_3_3 = document.getElementById("1.3_3").value;

  const saludar = (nombre) => "Hola " + nombre;

  function esperarISaludar(nombre, callback) {
    setTimeout(() => {
      let name = document.createElement("p");
      name.textContent = callback(nombre);
      result_1_3_3.appendChild(name);
    }, 2000);
  }
  esperarISaludar(input1_3_3, saludar);
});

//ex.4 Callbacks amb arrays
console.log(" --------------  1.3: Callbacks | ex.4");
//consola
saludo = () => {
  return "Holap";
};
function processarElements(array, callback) {
  for (i = 0; i < array.length; i++) {
    console.log(array[i], callback());
  }
}
array = [1, 2, 3, 4, 5, 6, 7];
processarElements(array, saludo);

//web
let boton_1_3_4 = document.getElementById("enviar-1-3_4");
const result_1_3_4 = document.getElementById("result_1.3_4");

boton_1_3_4.addEventListener("click", () => {
  let input1_3_4 = document.getElementById("1.3_4").value;
  const array1_2_4 = input1_3_4.split(",").map((num) => Number(num.trim()));

  saludo = () => "Holap";
  function processarElements(array, callback) {
    for (i = 0; i < array.length; i++) {
      let outputArray = document.createElement("p");
      outputArray.textContent = array[i] + " " + callback();
      result_1_3_4.appendChild(outputArray);
    }
  }
  processarElements(array1_2_4, saludo);
});

//ex.5
console.log(" --------------  1.3: Callbacks | ex.5");
//consola
function processarCadena(string, callback) {
  let enMayus = string.toUpperCase();
  callback(enMayus);
}
imprime = (string) => console.log(string);
processarCadena("esto se debe impimir en mayus", imprime);

//web
let boton_1_3_5 = document.getElementById("enviar-1-3_5");
const result_1_3_5 = document.getElementById("result_1.3_5");

boton_1_3_5.addEventListener("click", () => {
  let input1_3_5 = document.getElementById("1.3_5").value;

  function processarCadena(string, callback) {
    let enMayus = string.toUpperCase();

    result_1_3_5.textContent = callback(enMayus);
  }
  imprime = (string) => string;
  processarCadena(input1_3_5, imprime);
});

//Exercici 1.4: Rest & Spread operators
//ex.1 Spread en Arrays
console.log(" --------------  1.4: Rest & Spread operators | ex.1");
//console
array1 = ["esto", "es", "array1"];
array2 = ["aqui", "empieza", "array2"];
array3 = [...array1, ...array2];
console.log(array3);

//web
let boton_1_4_1 = document.getElementById("enviar-1-4_1");
const result_1_4_1 = document.getElementById("result_1.4_1");

boton_1_4_1.addEventListener("click", () => {
  let input1_4_1 = document.getElementById("1.4_1").value;
  let input1_4_12 = document.getElementById("1.4_12").value;

  let arrayDecadena1 = input1_4_1.split(" ");
  let arrayDecadena2 = input1_4_12.split(" ");

  array3 = [...arrayDecadena1, ...arrayDecadena2];
  result_1_4_1.textContent = "[" + array3 + "]    ";
});

//ex.2 Operador Rest en funciones
console.log(" --------------  1.4: Rest & Spread operators | ex.2");

//consola
function suma(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(
  "suma del array (1,2,3,4,5,10,10,10,10)=",
  suma(1, 2, 3, 4, 5, 10, 10, 10, 10)
);

//web
let boton_1_4_2 = document.getElementById("enviar-1-4_2");
const result_1_4_2 = document.getElementById("result_1.4_2");

boton_1_4_2.addEventListener("click", () => {
  let input1_4_2 = document.getElementById("1.4_2").value;

  let array_1_4_2 = input1_4_2.split(",").map((num) => Number(num.trim()));

  function suma(...nums) {
    let total = 0;
    for (const num of nums) {
      total += num;
    }
    return total;
  }
  let resultSuma = suma(...array_1_4_2);
  result_1_4_2.textContent = "suma del array " + array_1_4_2 + "=" + resultSuma;
});

//ex.3 Spread con objetos
console.log(" --------------  1.4: Rest & Spread operators | ex.3");

const objecte1 = {
  nombre: "objeto1",
  id: 1,
  localidad: "Canarias",
};
const objecte2 = { ...objecte1 };
objecte2.nombre = "objeto2";
objecte2.id = "2";
objecte2.localidad = "Castellón";
console.log("Output Objeto 1:");
console.log(objecte1);
console.log("Output Objeto 2:");
console.log(objecte2);

//ex.4 Rest en Destructuring
console.log(" --------------  1.4: Rest & Spread operators | ex.4");

//en consola
const array_ex_4 = ["hola", "esto", "es", "un", "array"];
const [array4_1, array4_2, ...array4_3] = array_ex_4;
console.log(array4_3);

//web
let boton_1_4_4 = document.getElementById("enviar-1-4_4");
const result_1_4_4 = document.getElementById("result_1.4_4");

boton_1_4_4.addEventListener("click", () => {
  let input1_4_4 = document.getElementById("1.4_4").value;
  let arrayDecadena1 = input1_4_4.split(",");
  const [array4_1, array4_2, ...array4_3] = arrayDecadena1;

  let array_1_4_4_a = document.createElement("p");
  array_1_4_4_a.textContent = "array1: " + array4_1;
  result_1_4_4.appendChild(array_1_4_4_a);

  let array_1_4_4_b = document.createElement("p");
  array_1_4_4_b.textContent = "array2: " + array4_2;
  result_1_4_4.appendChild(array_1_4_4_b);

  let array_1_4_4_c = document.createElement("p");
  array_1_4_4_c.textContent = "array3: " + array4_3;
  result_1_4_4.appendChild(array_1_4_4_c);
});

//ex.5 Spread en Funciones
console.log(" --------------  1.4: Rest & Spread operators | ex.5");

//consola
function spreadEnFunciones(a, b, c) {
  return "a = " + a + " b = " + b + " c = " + c;
}
arraySpread = ["esto", "va", "así?"];
console.log(spreadEnFunciones(...arraySpread));

//en web
let boton_1_4_5 = document.getElementById("enviar-1-4_5");
const result_1_4_5 = document.getElementById("result_1.4_5");

boton_1_4_5.addEventListener("click", () => {
  let input1_4_5 = document.getElementById("1.4_5").value;
  let arrayDeCadena_1_4_5 = input1_4_5.split(",");

  function spreadEnFunciones(a, b, c) {
    result_1_4_5.textContent = "a = " + a + " b = " + b + " c = " + c;
  }
  spreadEnFunciones(...arrayDeCadena_1_4_5);
});

//ex.6 Fusionant Objectes amb Spread
console.log(" --------------  1.4: Rest & Spread operators | ex.6");

const objeto1 = {
  nombre: "objeto1",
  apellido: "volador",
};
const objeto2 = {
  nom: "objeto2",
  cognom: "volador no identificado",
};
const objeto3 = { ...objeto1, ...objeto2 };
console.log(objeto3);

//Exercici 1.5: Array transformations
//ex.1 Map
console.log(" --------------  1.5: Array transformations | ex.1");
let array1_5 = [1, 2, 3, 4];
let array1_5_1 = array1_5.map(elevarNum);
function elevarNum(num) {
  return num ** 2;
}
console.log(array1_5_1);

//en web
let boton_1_5_1 = document.getElementById("enviar-1-5_1");
const result_1_5_1 = document.getElementById("result_1.5_1");

boton_1_5_1.addEventListener("click", () => {
  let input1_5_1 = document.getElementById("1.5_1").value;
  let array_1_5_1 = input1_5_1.split(",");
  let array5_1_1 = array_1_5_1.map(elevarNum);
  result_1_5_1.textContent = "Array cuadrada = [" + array5_1_1 + "]";
});

//ex2 Filter
console.log(" --------------  1.5: Array transformations | ex.2");
let array5_2 = array1_5.filter(checkPar);

function checkPar(num) {
  return num % 2 == 0;
}
console.log(array5_2);

//en web
let boton_1_5_2 = document.getElementById("enviar-1-5_2");
const result_1_5_2 = document.getElementById("result_1.5_2");

boton_1_5_2.addEventListener("click", () => {
  let input1_5_2 = document.getElementById("1.5_2").value;
  let array_5_2_1 = input1_5_2.split(",");
  let arrayFiltrada = array_5_2_1.filter(checkPar);
  result_1_5_2.textContent =
    "Array de los numeros par = [" + arrayFiltrada + "]";
});

//ex3 Find
console.log(" --------------  1.5: Array transformations | ex.3");

let array5_3 = [1, 10, 8, 11];
let array5_3_1 = array5_3.find(checkBigger);
function checkBigger(num) {
  return num > 10;
}
console.log(array5_3_1);

//web
let boton_1_5_3 = document.getElementById("enviar-1-5_3");
const result_1_5_3 = document.getElementById("result_1.5_3");

boton_1_5_3.addEventListener("click", () => {
  let input1_5_3 = document.getElementById("1.5_3").value;

  let filtro_5_3_1 = document.getElementById("1.5_3_1").value;

  let array_5_3_1 = input1_5_3.split(",");
  let arrayFind = array_5_3_1.find(checkBigger);
  function checkBigger(num) {
    return num > filtro_5_3_1;
  }
  result_1_5_3.textContent =
    "1r nº mayor a " + filtro_5_3_1 + " = " + arrayFind;
});

//ex.4 Reduce
console.log(" --------------  1.5: Array transformations | ex.4");

let array5_4 = [13, 7, 8, 21];
let array5_4_1 = array5_4.reduce(sumameEsta, 0);
function sumameEsta(total, num) {
  return total + num;
}
console.log(array5_4_1);

//web
let boton_1_5_4 = document.getElementById("enviar-1-5_4");
const result_1_5_4 = document.getElementById("result_1.5_4");

boton_1_5_4.addEventListener("click", () => {
  let input1_5_4 = document.getElementById("1.5_4").value;
  let array_5_4_1 = input1_5_4.split(",");

  let array_5_4_2 = array_5_4_1.reduce(sumameEsta, 0);
  function sumameEsta(total, num) {
    return total + Number(num);
  }
  result_1_5_4.textContent = "Suma total = " + array_5_4_2;
});

//ex.5 Función en una sola línea
console.log(" --------------  1.5: Array transformations | ex.5");
let array5_5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const resultSumatorioChungo = (nums) =>
  nums.filter((num) => num > 9).reduce((total, num) => total + num * 2, 0);

console.log(resultSumatorioChungo(array5_5));

//web
const boton_1_5_5 = document.getElementById("enviar-1-5_5");
const result_1_5_5 = document.getElementById("result_1.5_5");

boton_1_5_5.addEventListener("click", () => {
  const input1_5_5 = document.getElementById("1.5_5").value;
  const array_5_5_1 = input1_5_5.split(",");

  const resultSumatorioChungo = (nums) =>
    nums
      .filter((num) => Number(num) > 9)
      .reduce((total, num) => total + num * 2, 0);

  result_1_5_5.textContent =
    "Resultado suma de [" +
    array_5_5_1 +
    "] filtrado = " +
    resultSumatorioChungo(array_5_5_1);
});

//ex.6 Every / Some
console.log(" --------------  1.5: Array transformations | ex.6");

let array5_6 = [11, 12, 13, 14];

console.log(array5_6.every((num) => num > 10));
console.log(array5_6.some((num) => num > 10));

//web
const boton_1_5_6 = document.getElementById("enviar-1-5_6");
const result_1_5_6 = document.getElementById("result_1.5_6");

boton_1_5_6.addEventListener("click", () => {
  const input1_5_6 = document.getElementById("1.5_6").value;
  const array_5_6_1 = input1_5_6.split(",");

  result_1_5_6.textContent = array_5_6_1;

  let texto = document.createElement("p");
  texto.textContent = "every: " + array_5_6_1.every((num) => num > 10);
  result_1_5_6.appendChild(texto);

  let texto2 = document.createElement("p");
  texto2.textContent = "some: " + array_5_6_1.some((num) => num > 10);

  result_1_5_6.appendChild(texto2);
});

//Exercici 1.6: Array loops
//ex.1 forEach
console.log(" --------------  1.6: Array loops | ex.1");

let noms = ["Anna", "Bernat", "Clara"];

noms.forEach((element) => {
  console.log(element);
});
//web
const boton_1_6_1 = document.getElementById("enviar-1-6_1");
const result_1_6_1 = document.getElementById("result_1.6_1");

boton_1_6_1.addEventListener("click", () => {
  const input1_6_1 = document.getElementById("1.6_1").value;
  const nombres_6_1_1 = input1_6_1.split(",");
  result_1_6_1.textContent = "Nombres: ";

  nombres_6_1_1.forEach((element) => {
    const nombre = document.createElement("p");
    nombre.textContent = element;
    result_1_6_1.appendChild(nombre);
  });
});

//ex.2 for-of
console.log(" --------------  1.6: Array loops | ex.2");
for (nom of noms) {
  console.log(nom);
}
//web
const boton_1_6_2 = document.getElementById("enviar-1-6_2");
const result_1_6_2 = document.getElementById("result_1.6_2");

boton_1_6_2.addEventListener("click", () => {
  const input1_6_2 = document.getElementById("1.6_2").value;
  const nombres_6_2_1 = input1_6_2.split(",");

  result_1_6_2.textContent = "Nombres: ";

  for (nom of nombres_6_2_1) {
    const nombre = document.createElement("p");
    nombre.textContent = nom;
    result_1_6_2.appendChild(nombre);
  }
});

//ex.3 filter en array
console.log(" --------------  1.6: Array loops | ex.3");
let numeros = [1, 2, 3, 4, 5, 6];
let numerosFiltrados = numeros.filter(checkPar);
console.log(numerosFiltrados);
//web
const boton_1_6_3 = document.getElementById("enviar-1-6_3");
const result_1_6_3 = document.getElementById("result_1.6_3");

boton_1_6_3.addEventListener("click", () => {
  const input1_6_3 = document.getElementById("1.6_3").value;
  const nombres_6_3_1 = input1_6_3.split(",");

  let numerosFiltrados = nombres_6_3_1.filter(checkPar);
  result_1_6_3.textContent = numerosFiltrados;
});

//ex.4 For-in
console.log(" --------------  1.6: Array loops | ex.4");
let obj = {
  nom: "Ona",
  edat: 25,
  ciutat: "Barcelona",
};
for (const key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    console.log(key + ": " + obj[key]);
  }
}

//ex.5 For-of amb break
console.log(" --------------  1.6: Array loops | ex.5");
for (const num of numeros) {
  console.log(num);
  if (num == 5) break;
}
//web
const boton_1_6_5 = document.getElementById("enviar-1-6_5");
const result_1_6_5 = document.getElementById("result_1.6_5");

boton_1_6_5.addEventListener("click", () => {
  const input1_6_5 = document.getElementById("1.6_5").value;
  const nums_6_5_1 = input1_6_5.split(",");
  for (const num of nums_6_5_1) {
    const numero = document.createElement("p");
    numero.textContent = num;
    result_1_6_5.appendChild(numero);

    console.log(num);
    if (num == 5) break;
  }
});

//ex.6 For-of amb index
console.log(" --------------  1.6: Array loops | ex.6");

for (const nom of noms) {
  console.log("índice " + noms.indexOf(nom) + ": " + nom);
}
//web
const boton_1_6_6 = document.getElementById("enviar-1-6_6");
const result_1_6_6 = document.getElementById("result_1.6_6");

boton_1_6_6.addEventListener("click", () => {
  const input1_6_6 = document.getElementById("1.6_6").value;
  const noms_6_6_1 = input1_6_6.split(",");
  result_1_6_6.textContent = "Noms:";

  for (const nom of noms_6_6_1) {
    const nombre = document.createElement("p");
    nombre.textContent = "índice " + noms_6_6_1.indexOf(nom) + ": " + nom;
    result_1_6_6.appendChild(nombre);
  }
});

//Exercici 1.7: Promises & Async/Await
//ex.1 Creació d'una Promesa
console.log(" --------------  1.7: Promises & Async/Await | ex.1");

const PromesaDeMeñique = new Promise((resolve, reject) => {
  setTimeout(() => {
    let x = 0;
    if (x == 0) {
      resolve("Hola, món");
    } else {
      reject(new Error("No te quiero ver."));
    }
  }, 2000);
});

//ex.2 Utilització d'una Promesa
console.log(" --------------  1.7: Promises & Async/Await | ex.2");

PromesaDeMeñique
    .then((mensaje) => {
        console.log(mensaje, ".mensaje exitoso");
    })
    .catch((error) => {
        console.error(error);
    });
//web
const result_1_6_7 = document.getElementById("result_1.6_7");
PromesaDeMeñique
.then((mensaje) => {
    result_1_6_7.textContent = mensaje, ".mensaje exitoso";
})
.catch((error) => {
    result_1_6_7.textContent = error;
});




//ex.3 Promesa amb reject
console.log(" --------------  1.7: Promises & Async/Await | ex.3");

function Promesa2(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (input == "Hola" || input == "hola") {
        resolve("Promesa Aceptada");
      } else {
        reject(new Error("nop"));
      }
    }, 2000);
  });
}
Promesa2("Hola")
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });

//web
const boton_1_7_3 = document.getElementById("enviar-1-7_3");
const result_1_7_3 = document.getElementById("result_1.7_3");

boton_1_7_3.addEventListener("click", () => {
  const input1_7_3 = document.getElementById("1.7_3").value;
  result_1_7_3.textContent = "Procesando, espera unos segundos";
  Promesa2(input1_7_3)
  .then((mensaje) => {
    result_1_7_3.textContent = mensaje;
  })
  .catch((error) => {
    result_1_7_3.textContent = error;
  });



});







//ex.4 Ús de async/await
console.log(" --------------  1.7: Promises & Async/Await | ex.4");

async function esperarPromesa(promesa) {
  const promesaFetched = await promesa;
  console.log(promesaFetched);
}
esperarPromesa(PromesaDeMeñique);

//ex.5 Gestió d'errors amb async/await
console.log(" --------------  1.7: Promises & Async/Await | ex.5");
async function esperarPromesa(promesa) {
  try {
    const promesaFetched = await promesa;
    console.log(promesaFetched);
  } catch (err) {
    console.log(err.message);
  }
}
esperarPromesa(PromesaDeMeñique);

//web
const result_1_7_5 = document.getElementById("result_1.7_5");
result_1_7_5.textContent = "Espera unos segundos";

async function esperarPromesa(promesa) {
  try {
    const promesaFetched = await promesa;
    result_1_7_5.textContent = promesaFetched;
  } catch (err) {
    result_1_7_5.textContent = err.message;
  }
}
esperarPromesa(PromesaDeMeñique);







//ex.6 Promise.all
console.log(" --------------  1.7: Promises & Async/Await | ex.6");
function promesa1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let hojalata = true;
      if (hojalata == true) {
        resolve("Hojalata vive");
      } else {
        reject(new Error("Hojalata fallece"));
      }
    }, 2000);
  });
}

function promesa2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let HombrePaja = true;
      if (HombrePaja == true) {
        resolve("HombrePaja se va");
      } else {
        reject(new Error(" HombrePaja vuelve"));
      }
    }, 3000);
  });
}

Promise.all([promesa1(), promesa2()])
.then((mensaje) => {
  console.log(mensaje);
})
.catch((error) => {
  console.error(error);
});

//web
const result_1_7_6 = document.getElementById("result_1.7_6");
result_1_7_6.textContent = "Espera unos segundos";
Promise.all([promesa1(), promesa2()])
.then((mensaje) => {
  result_1_7_6.textContent = mensaje;
})
.catch((error) => {
  result_1_7_6.textContent = error;
});



//menu
const burger = document.getElementById("burger-icon");
const menuLinks = document.getElementById("navbar-links");
const menu = document.getElementById("menu");
const contenido = document.getElementById("contenido");

burger.addEventListener("click", () => {
  menuLinks.classList.toggle("is-active");
  burger.classList.toggle("is-active");
  menu.classList.toggle("activado");
  contenido.classList.toggle("activado");
});