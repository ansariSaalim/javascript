console.log("Let's start again....");

let rectangle = {
    length: 4,
    breadth: 3,

    //Methods 
    draw: function(){
        console.log("drawing rectangle!!");
    }
};


//******************************Factory function************************************
function createRectangle(length, breadth) {
    let rectangle1 = {
        length: length,
        breadth: breadth,
    
        //Methods 
        draw: function(){
            console.log("drawing rectangle!!");
        }
    };
    return rectangle1;
};
//Create Object
let obj = createRectangle(5,10);
//Call
obj.draw();


//******************************Constructor functtion****************************
//Pascal case..
function Rectangle(){
    this.length = 1;
    this.breadth = 1;
    this.draw = function(){
        console.log("drawing...");
    }
}
//Create object
let obj1 = new Rectangle();
//Call


