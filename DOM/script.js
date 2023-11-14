//window: The window object is supported by all browsers. It represents the browser's window.
// All global JavaScript objects, functions, and variables automatically become members of the window object.
// Global variables are properties of the window object.
// Global functions are methods of the window object.

//DOM: When a web page is loaded, the browser creates a Document Object Model of the page.
// The HTML DOM model is constructed as a tree of Objects:
// With the object model, JavaScript gets all the power it needs to create dynamic HTML:
// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

//BOM: There are no official standards for the Browser Object Model (BOM).
// Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, it is often referred to, as methods and properties of the BOM.

//*************************************Access Element****************************************
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();

//*********************************Update Existing Contact***************************
// The innerHTML and outerHTML DOM properties have many similarities, but one key difference. 
// The innerHTML property captures the HTML contents of an element. In contrast, the outerHTML property 
// captures the HTML that represents the element itself and its content.
// .innerHTML
// .outerHTML


// textContent gets the content of all elements, including <script> and <style> elements. In contrast, 
// innerText only shows "human-readable" elements. textContent returns every element in the node. In contrast,
//  innerText is aware of styling and won't return the text of "hidden" elements.
// .textContent
// .innerText


// const list = document.getElementById("list");

// for (let i = 0; i < 8; i++) {
//     const newItem = document.createElement("li");
//     newItem.innerHTML = `<a href="#">Item ${list.children.length + 1}</a>`;
//     list.appendChild(newItem);
// }

//****************************Add new element*****************************************
// Create
// .createElement();
// Add
// .appendChild();
let myPara = document.createElement('p');
myPara.textContent = 'I am a new Para';
document.body.appendChild(myPara);

//.insertAdjacentHTML()
// beforebegin, afterbegin, beforeend, afterend

//**************************Remove********************************
// .removeChild(); --> Drawback: You know parent to remove a child
// .remove()
myPara.remove();


