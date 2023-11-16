//*****************************Browser Events**********************************
// events, respondto event, data stored in event, stop an event, lifecycle of event 
// Events are invisible: turnon --> monitorEvents() and turnoff --> unmonitorEvents() 
//********************************EventListener*********************************
// document.addEventListener('click', ()=>console.log('I have clicked on the document'));

//h1
let h1 = document.querySelector('h1');

//function
let change = ()=>{
    h1.style.color = 'white';
    h1.style.background = 'black';
}
//Add
h1.addEventListener('click', change);
//Remove
// h1.removeEventListener('click', change);


//Phases of an event
// Capturing Phase, you have to pass third parameter (true) to activate 
// At target phase,
// Bubbling phase --> by default 
// document.addEventListener('click', ()=>console.log('I have clicked on the document'), true);

//prevent default in eventListener
let aTags = document.querySelectorAll('a');
let selectTags = aTags[3];
selectTags.addEventListener('click', function(event){
    event.preventDefault();
    console.log('Maza aagaya');
});


// Avoid too many element
//CREATE Element 
let myDiv = document.createElement('div');

//Target
const paraClick = (event)=>console.log('Para '+ event.target.textContent); 
myDiv.addEventListener('click', paraClick); 


for(let i=1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para '+ i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

//How target works?
let article = document.querySelector('#wrapper');

article.addEventListener('click', (event)=>{
    if (event.target.nodeName === 'SPAN'){
        console.log('Clicked on Span'+event.target.textContent);   
    }
});

