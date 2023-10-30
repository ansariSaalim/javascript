let a = 10;
let b = a;

a++;
//Primitive are copied by their value.
console.log(a);
console.log(b);

let a1 = {value: 10};
let b1 = a1;

a1.value++;
//References are copied by their address/reference.
console.log(a1);
console.log(b1);