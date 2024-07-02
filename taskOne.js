function calculateArea(width, height){
    Area = width * height
    return Area
}
let area = calculateArea(2, 3)
console.log(area)

function convertToFahrenheit(temperature) {
    Fahrenhreit = temperature * 9/5 + 32;
    return Fahrenhreit;
}
result = convertToFahrenheit(10)
console.log(result);

function isEven(number) {
    if(number % 2 == 0){
        return ("even");
    }
        if(number % 2 != 0){
            
            return ("odd");
         }
}
result = isEven(5)
console.log(result);
