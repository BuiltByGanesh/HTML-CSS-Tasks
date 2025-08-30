// DOM Maniplutions
// Selecting Elements
// By ID
let element = document.getElementById("myfirst");

// By Class Name
let elements = document.getElementsByClassName("child");

// By Tag Name
let tags = document.getElementsByTagName("div");

// By Query Selector
let queryElement = document.querySelector(".child");

// Changing Content
element.innerText = "Hello, World!";
element.innerHTML = "<b>Hello, World!</b>";

// Changing Styles
element.style.color = "blue";
element.style.fontSize = "20px";
element.style.fontWeight = "bold";
element.style.backgroundColor = "yellow";
element.style.padding = "10px";
element.style.borderRadius = "5px";



// Creating and Adding Elements
let newElement = document.createElement("p");
newElement.innerText = "This is a new paragraph.";

document.getElementsByClassName("child")[1].appendChild(newElement.cloneNode(true));
document.getElementsByClassName("child")[0].prepend(newElement.cloneNode(true));

document.getElementById("child1").appendChild(newElement);


// Removing Elements
let list =document.getElementById("mylist");
let fistItem = list.querySelector("li");
list.removeChild(fistItem);


// Event Handling
document.getElementById("btn").addEventListener("click", function() {
    alert("Button Clicked!");
});

document.getElementById("btn").addEventListener("mouseover", () => {
    alert("Mouse Over Button");
});


// Form input Handling
document.getElementById("btn2").addEventListener("click", () => {
    let name = document.getElementById("nameValue").value;
    alert("Hello, " + name);
});

// Traversing the DOM
let parent = document.getElementById("mylist");

console.log(parent.firstElementChild.innerText);
console.log(parent.lastElementChild.innerText);
console.log(parent.children[2].innerText);

