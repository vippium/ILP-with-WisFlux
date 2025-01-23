function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log("60°C to Fahrenheit: " + convertToFahrenheit(60) + "°F");
console.log("45°F to Celsius: " + convertToCelsius(45) + "°C");
