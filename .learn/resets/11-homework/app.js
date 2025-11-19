// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let vallueInYen = valueInDollar * 156.5;
    return vallueInYen;
}

const fromYenToPound = function(vallueInYen){
    let vallueInPound = valueInYen * 0.87;
    return vallueInYen;
}

const sum = (a, b) => {
    return a + b;
    };

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar };


