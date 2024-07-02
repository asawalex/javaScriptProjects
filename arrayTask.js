
let arrayOfNumber = [2,5,6,7,9,3,5,45,23,];

function evenOfNumber(number){

    let listOfEvenNumber = [];

    for(let counter = 0; counter < number.length; counter++){
        if(number[counter] % 2 === 0 ){
            listOfEvenNumber.push(number[counter]);
             }
        }
    return listOfEvenNumber;
}
console.log(evenOfNumber( arrayOfNumber));