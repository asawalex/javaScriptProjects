const personName = function(num) {
     return num * num;
};
console.log(personName(3));

const name = function (param) {
    console.log(param);
}
name("Asade Olawale");
function nameOfMyGrandFather() {
    console.log("Asaade");

    function nameOfMyDady() {
        console.log("shinan");

        function myName() {
            console.log("Asade Olawale");

        }
        myName() 
    }
    nameOfMyDady()
}
nameOfMyGrandFather()
