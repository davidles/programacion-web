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







