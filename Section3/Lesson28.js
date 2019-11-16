// Events

// // Unnamed function
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');
//   e.preventDefault(); // This prevents the default ouput of the html 
// })

document.querySelector('.clear-tasks').addEventListener('click', onclick);

function onclick(e){ // The parameter here is the event object
  let val;
  val = e;


  //Event target element
  val = e.target;
  val = e.target.id; // Empty
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hello'; // Changes the info 

  //Event type
  val = e.type;

  //Timestamp
  val = e.timeStamp;

  //Coords event relative to the top of the window
  val = e.clientY;
  val = e.clientX;

  //Coords event relative to the top of the element
  val = e.offsetY;
  val = e.offsetX;


  console.log(val)
}