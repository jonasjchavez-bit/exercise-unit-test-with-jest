const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

//const sum = (a,b) => {
//    return a + b
//}

//console.log(sum(7,3))

//module.exports = { sum };

module.exports = { sum, fromEuroToDollar }

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

