console.log("Let's start again....");

let rectangle = {
  length: 4,
  breadth: 3,

  //Methods
  draw: function () {
    console.log("drawing rectangle!!");
  },
};

//******************************Factory function************************************
function createRectangle(length, breadth) {
  let rectangle1 = {
    length: length,
    breadth: breadth,

    //Methods
    draw: function () {
      console.log("drawing rectangle!!");
    },
  };
  return rectangle1;
}
//Create Object
let obj = createRectangle(5, 10);
//Call
obj.draw();

//******************************Constructor functtion****************************
//Pascal case..
function Rectangle() {
  this.length = 1;
  this.breadth = 1;
  this.draw = function () {
    console.log("drawing...");
  };
}
//Create object
let obj1 = new Rectangle();
//Call
obj1.length;
obj1.draw();

//**********************************Dynamic nature***************************************
obj1.color = "black";
console.log(obj1);

delete obj1.color;
console.log(obj1);

// Every function is an object and every object has constructor.
// How constructor function generate function ??
let react = new Function(
  `length`,
  `breadth`,
  `this.length = 1;
this.breadth = 1;
this.draw = function(){
    console.log("drawing...");
}`
);
console.log(react);
