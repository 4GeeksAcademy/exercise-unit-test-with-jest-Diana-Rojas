const oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
};

// Función para convertir de EUR a USD
const fromEuroToDollar = function(euros) {
    return euros * oneEuroIs.USD;
};

// Función para convertir de USD a JPY
const fromDollarToYen = function(dollars) {
    const euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
};

// Función para convertir de JPY a GBP
const fromYenToPound = function(yen) {
    const euros = yen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
};

// Exportar funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };