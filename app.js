// Varibles

// VAR

// Declarando la variable
// case sensitive
// camelCase -> varibleRecomendadaComoEstaAhora
// PascalCase -> VariablePascalCase
// snake_case -> variables_snake_case
// Tiene que referirse al contenido y tiene que ser represetativo del contenido
// Siempre en ingles
// No puede empezar con numeros

var varibleNoRecomendada;

// Asigacion
varibleNoRecomendada = "Esta variable no se recomienda usar";

var declararAsignar = "Declarado y asignando valor";

var varibleNoRecomendada = "Esta var es la recomendada";

// Tipo LET
let variableRecomendada = "Esta variable tipo let es la recomendada";
// Redeclarar - No se puede
//let variableRecomendada;

// Reasignar
variableRecomendada = "nuevo valor";

// Tipo CONST
const usuario = "Ema";
 // No puedo Redeclarar
//let usuario;

// No puedo reasignar
// usuario = "David";


// SCOPES

// Global (padre)
let edad;

edad = 32;
{
    // Local (hijo)
    let userName = "Ema";
    let edad = 37;
    //console.log("Local: ", userName, edad);
}

//console.log("Global: ", edad);






// Tipos de datos

// Number
let age = 32; // Type Number | int = entero
let average = 47.7; // Type Number | Float


// String
// Comillas dobles
let user = "emaProgramming"; // Type String = Cadena de texto || caracteres
let char = "e"; // Type String

// Comillas simples
let name = 'ema';

// Backticks = Literal template || template string
let lastName = `
Esto
    Es
        Un
            Texto literal
`;

let errors = 1;

let message = `Usted tiene ${errors} para solucionar`;

let msg = 'Usted tiene ' + errors + ' para solucionar';









// Operadores

// Aritmeticos
const suma = 3 + 3; // suma
const restar = 3 - 3; // resta 
const multiplicacion = 3 * 3; // multiplicacion 
const division = 3 / 3; // division 
const modulo = 5 % 2;

// De comparacion

let a = 3;
const b = '3';
const c = 5;

// Type Boolean = true / false

//'==' Comparacion Compara el valor de las variables
// const resultado = a == b

// '===' Comparacion estricta = Comparar el tipo y valor

// const resultado = a === b;

// Mayor y menor
const resultadoMayor = a > c;
const resultadoMenor = a < c;
const mayorOIgual = a >= b;
const menorOIgual = a <= c;

// Distinto
// Compara el valor
const diferenteValor = a != b;

// Compara el valor y el tipo
const diferenteValorYTipo = a !== b;


// De asignacion

const d = 'un valor';
a = 3;
// a = a + 5;
// a += 5
// a -= 2

// a = a * 2;
// a *= 2
// 6
// Aumentar y disminuir

// a = a + 1;
// a++;
// a = 4

// a = a - 1;
a--;



console.log(a);




