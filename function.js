function listOfNumber(number) {

    let emptyOfArrayObject = {};

    for(let count of number){
        if(count in emptyOfArrayObject){
            emptyOfArrayObject[count] ++;
        }
        else{
            emptyOfArrayObject[count] = 1;
        }
    }
        return emptyOfArrayObject;
}
console.log(listOfNumber([2,4,6,4,3,12,6,8,4]));
