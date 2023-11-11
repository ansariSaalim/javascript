//****************************Exceptional Handling**************************
//Getters & Setters
let person = {
    fName:'Saalim',
    lName: 'Ansari',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        if (typeof value !== 'string') {
            throw new Error("You have not sent a String")
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

//Try
try {
    person.fullName = 1;
} catch (e) {
    // alert(e);
}

//Reducing an Array
let arr = [1,2,3,4,5];

//Normal way
// let total = 0;
// for(let i of arr){
//     total += i;
// }
// console.log(total);

//Reducing way
let res = arr.reduce((total, currentValue) => total + currentValue, 0);
console.log(res);

