let result = []
let numbers = [2,5,2,5,7,8,9,6];

    const listOfNumbers = (listOfnumbers) => { 
for( const count of listOfnumbers){
    result.push(count*2);
}
return {result}
    }
    console.log(listOfNumbers(numbers
    ))

    let results = 0;
    const sumOfArray = (numbers) => {
    
    for(const number of numbers) {
        results += number;
    }
    return {results}
}
let listOfNumber = [2,3,4,6,2,];
console.log(sumOfArray(listOfNumber));


const maximumNumber = (nums) => {
    let max = nums[0]
    

    for(const number of nums){
        if(number > max)
            max = number
    }
    return {max}
}
console.log(maximumNumber([1,4,6,8,34,2]))