//****************************Strings*************************************
//Strings are of two types : (1.) Primitive (2.) Objects

let lastName = " Ansari";
console.log(typeof lastName);

let firstName = new String('Saalim');
console.log(typeof firstName);

console.log(lastName.length);
console.log(lastName[5]);
console.log(lastName.includes('An'));
console.log(lastName.startsWith(' An'));
console.log(lastName.endsWith('ri'));
console.log(lastName.indexOf('i'));
console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(lastName.trim());
console.log(lastName.replace(' Ans', 'Sa'));
//For more reference search String mdn
