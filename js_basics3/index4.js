//**********************************Combining and Slicing Arrays***************************************
//Primitive
//Combining
let first = [1,2,3];
let second = [4,5,6];

let combined = first.concat(second);
console.log(combined);

//Slicing
let sliced = combined.slice(2,4);
console.log(sliced);

//Objects
let firstObj = [
    {
        name: "Saalim",
        course: "B.tech",
    },
];
let secondObj = [
    {
        name: "Arman",
        course: "B.tech",
    },
];
//Combining
let combinedObj = firstObj.concat(secondObj)
console.log(combinedObj);
//Slicing
let slicedObj = combinedObj.slice(0,1);
console.log(slicedObj);

//Spread Operator
let combinedSpread = [...first, ...second];
console.log(combinedSpread);


//Iterating an array
let arr = [10,20,30,40];
//for-of
for (let i of arr) {
    console.log(i);
}
//for-each
arr.forEach(function(e){
    console.log(e);
})

//Using arrow
arr.forEach(element => {
    console.log(element);
});

//Join
let arr1 = [10,20,30,40,50,60];
let joined = arr1.join(' ');
console.log(joined);

//Split
let msg = 'Javascript is Awesome';
let splitmsg = msg.split(' ');
console.log(splitmsg);

//Sort
// How To Sort Numbers Accurately in JavaScript
// The sort() method of JavaScript compares the elements of the array by converting 
// them into strings and then comparing their Unicode code points.
let num = [10,50,100,20,80];
num.sort();
console.log(num); //Give wrong output [ 10, 100, 20, 50, 80 ]

num.sort((a, b) => a - b);
console.log(num);

let sortObj = [
    {
        name: "Saalim",
        course: "B.tech",
        age: 20,
    },
    {
        name: "Arman",
        course: "B.tech",
        age: 18,
    },
];
sortObj.sort((a,b)=> a.name.localeCompare(b.name));
console.log(sortObj);

sortObj.sort((a,b)=> a.age - b.name);
console.log(sortObj);


//Reverse
num.reverse();
console.log(num);

num.sort((a, b) => b - a);
console.log(num);

//Filter
let numbers = [0,1,2,2.5,3,3.5,4,4.5,5];
let filtered = numbers.filter(value => value>=4);
console.log(filtered);

let items = [
    {
        price: 1000,
        rating: 3.5
    },
    {
        price: 1200,
        rating: 4.5
    },
    {
        price: 800,
        rating: 4.8
    },
    {
        price: 1500,
        rating: 5
    },
];
let filteredObj = items.filter(item => item.rating > 4 && item.price === 800);
console.log(filteredObj);

//Map
let map = [10,11,12];
let mapped = map.map(value=> 'student-no: '+value);
console.log(mapped);

//Filter and Map
let numbers1 = [0,1,2,3,4,-1,-2,-3];
let filterMap = numbers1
            .filter(value => value>=0)
            .map(num =>({value: num}));
console.log(filterMap);
