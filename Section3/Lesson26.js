//Create element
const li = document.createElement('li');

//Add Class for the item from your HTML
li.className = 'collection-item';

//Add the id
li.id = 'new-item'

//Add attribute - title is used when moused over 
li.setAttribute('title', 'New Item');

//Create text node and append
li.appendChild(document.createTextNode('Hello world!'));

//Create new link element - x
const link = document.createElement('a')

//Add Classes
link.className = 'delete-item secondary-content'

//Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>'

//Append link into li
li.appendChild(link)

//Append li as child to ul
document.querySelector('ul.collection').appendChild(li)


console.log(li);