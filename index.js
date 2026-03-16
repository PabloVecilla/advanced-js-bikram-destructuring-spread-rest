//RESUELVE LOS EJERCICIOS AQUÍ
// 1.- Dado el objeto empleados, extrae la empleada Ana completa.
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
 const  [, ana, ] = empleados;  
console.log(ana); 

// 2.- Dado el objeto empleados, extrae el email del empleado Luis 
const [luis, , ] = empleados; 
console.log(luis);  
const emailLuis = luis.email; 
console.log(emailLuis);

// 3.- Usa destructuración para cambiar los valores de a y b;
let a = 5;
let b = 3;
let list = [a,b]; 
[, a] = list; 
[b, ] = list; 
console.log(a); 

// 4.- Dado el objeto HIGH_TEMPERATURES
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

  const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);

// 5.- Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
let sumEveryOther = (a, b, ...n) => {
    let arrayNumbers = []; 
    arrayNumbers.push(a, b, ...n);
    console.log(arrayNumbers);  
    let suma = arrayNumbers.reduce((acc, curr) => acc + curr, 0); 
    console.log(suma); 
    return suma; 
}
console.log(sumEveryOther(6, 8, 2, 3, 1)); //20


// 6.- Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números).
let addOnlyNums = (a, b, ...n) => {
    let arrayElements = []; 
    arrayElements.push(a, b, ...n);
    let arrayNumbers = arrayElements.filter(num => typeof num === "number")
    let suma = arrayNumbers.reduce((acc, curr) => acc + curr, 0); 
    return suma; 
}
console.log(addOnlyNums(1, "perro", 2, 4)); //7

// 7.- Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
const countTheArgs = (a, b, ...n) => {
    let arrayArgs = []; 
    arrayArgs.push(a, b, ...n); 
    return arrayArgs.length; 
}
console.log(countTheArgs("gato", "perro")); // 2
console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4

// 8.- Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
const combineTwoArrays = (array1, array2) => {
    let resultArray = []; 
    resultArray.push(...array1, ...array2); 
    return resultArray; 
}

// 9.- Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.
const onlyUniques = (a, b, ...n) => {
    let array = []; 
    array.push(a, b, ...n);
    let resultArray = array.filter((elem, index, array) => array.indexOf(elem) === index); 
    return resultArray; 
}
// OR:: 
const onlyUniques1 = (...n) => n.filter((elem, index) => n.indexOf(elem) === index); 

onlyUniques1("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
onlyUniques1(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

// OR
function onlyUniques2(...arg) {
    let result = []; 
    for (let argument of arg) {
        if (!result.includes(argument)) result = [...result, argument]; 
    }
    return result; 
}
onlyUniques2("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]

// 10.- Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
const combineAllArrays = (...arrays) => {
    let arraysArray = []; 
    for (let array of arrays) {
        arraysArray = [...arraysArray, ...array]; 
    }
    console.log(arraysArray); 
    return arraysArray; 
}

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1]
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));  // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

//  OR:: 
const combineAllArrays2 = (...arraysYargumentos) => arraysYargumentos.reduce((acumulador, actual) => [...acumulador, ...actual], []);
    // concatena todos los argumentos en un único array. NO SOLO VALE PARA SUMAR, une en un solo elemento, pero puede mantener todos los argumentos intactos, simplemente los envuelve en un elemento único.  
    console.log(combineAllArrays2([3, 6, 7, 8], [2, 7, 3, 1]));// [3, 6, 7, 8, 2, 7, 3, 1]
    console.log(combineAllArrays2([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

// 11.- Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.
const sumAndSquare = (...arguments) => {
    let numbers = arguments.filter(num => typeof num === "number"); 
    numbers = numbers.map(num => num**2); 
    return numbers.reduce((a, b) => a+b); 
}

sumAndSquare("tetas", false, 2, 44, 56, "tu madre"); 

// OR:: 
const sumAndSquare1 = (...arguments) => {
    let total = 0; 
    for (num of arguments) {
        total += num**2;
    }  
    return total; 
}

console.log("con la segunda funcion: " + sumAndSquare1(2, 44, 56, 8));

const sumAndSquare2 = (...arguments) => arguments.filter(num => typeof num === "number")
                                        .reduce((acc, num) => acc+num**2); 
console.log("con la tercera funcion: " + sumAndSquare2(2, 44, 56, 8)); 