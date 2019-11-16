// Event Bubbling & Event Delegation


// Event bubbling
// document.querySelector('.card-title').addEventListener('click', function (e) {
//   console.log('card-title');
//   // console.log(e.target);
  
// })
// document.querySelector('.card-content').addEventListener('click', function (e) {
//   console.log('card-content');
//   // console.log(e.target);
// })

// document.querySelector('.card').addEventListener('click', function () {
//   console.log('card');
//   // console.log(e.target);
// })

// document.querySelector('.col').addEventListener('click', function () {
//   console.log('col');
//   // console.log(e.target);
// })

// Event Delegation
// Event delegation is useful if you are trying to access something which is the same class
// Add the event listener on the parent element and then use .target to grab the correct class

// // This doesn't work and will only grab the first in the list
// const delItem = document.querySelector('.delete-item')

// delItem.addEventListener('click', deleteItem)

document.body.addEventListener('click', deleteItem)
function deleteItem(e) {
  // This is not good practice
  // console.log(e.target);
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('delete item');  
  // }

  // Better
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}

