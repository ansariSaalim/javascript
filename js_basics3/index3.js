//****************************Arrays*****************************

let arr = [1,2,3,4,5];
console.log(arr);

//length
console.log(arr.length);

//Access 
console.log(arr[0]);

//Search 
console.log(arr.indexOf(3));

//***********************************Insertion****************************************
//Insert at the end
arr.push(10)
console.log(arr);
//Insert at the begin
arr.unshift(22);
console.log(arr);
//Insert in the middle
arr.splice(2, 0, 'a', 'b', 'c');
console.log(arr);

let arrObject = [
    {
        name: 'Saalim',
        course: 'B.tech'
    },
    {
        name: 'Arman',
        course: 'B.tech'
    }
];
console.log(arrObject);
