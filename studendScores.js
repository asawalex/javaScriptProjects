const listOfStudentScores = [90, 24, 56, 67, 89, 16, 89, 79]

let userInput = listOfStudentScores.map((scores) => { 
    if(scores >= 90 && scores <= 100){
        return "A";
    }
    else if(scores >= 70 && scores <= 80){
        return  "B";
    }
    else if(scores >= 60 && scores <= 70){
        return  "c";
    }
    else{
        return "F";
    }
}) ;

console.log(userInput + " ");
