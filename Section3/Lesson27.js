// Replace element

// Create element
const newHeading = document.createElement('h2')

// Add id
newHeading.id = 'task-title'

// New Text Node
newHeading.appendChild(document.createTextNode('Task List'))

// Get the old heading
const oldHeading = document.getElementById('task-title')

// Parent of the old/ new heading
const cardAction = document.querySelector('.card-action')

// call the replace on the parent
cardAction.replaceChild(newHeading, oldHeading)

// Remove element
const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3])

// Classes and Attributes
const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]
let val;
val = link.className;
val = link.classList
val = link.classList[0]
link.classList.add('test')
link.classList.remove('test')
val = link;

// Attributes
val = link.getAttribute('href')
val = link.setAttribute('href', 'http://google.com')
link.setAttribute('title', 'Google')
val = link

console.log(val);


