//For-in loop
let circle = {
  pi: 3.14,
  radius: 4,
};
for (let key in circle) {
  console.log(key, circle[key]);
}

//For-of loop
//used only for iterables --> arrays and maps

//********************Object Cloning*************************
let src = {
    a: 10,
    b: 20,
    c: 30
};

let dest = {};

//Iteration
for (let key in src) {
    dest[key] = src[key] ;
}
console.log(dest)

//Assign
let dest1 = Object.assign({}, src);
console.log(dest1)

//Spread.
let dest2 = {...src};
console.log(dest2)

