// Input events

const form = document.querySelector('form');
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5');
const select = document.querySelector('select')


// Setting form value to nothing
taskInput.value = '';

// Submit Action
// form.addEventListener('submit', runEvent);

// Key Pressed Down
// taskInput.addEventListener('keydown', runEvent)

// Key Up
// taskInput.addEventListener('keyup', runEvent)

// Key Press
// taskInput.addEventListener('keypress', runEvent)

// Focus
// taskInput.addEventListener('focus', runEvent)

// Blur
// taskInput.addEventListener('blur', runEvent)

// Cut
// taskInput.addEventListener('cut', runEvent)

// Paste
// taskInput.addEventListener('paste', runEvent)

// Input - Anything that is classed as an input
// taskInput.addEventListener('input', runEvent)

// Change Event
select.addEventListener('change', runEvent)

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);



  // Will change the heading value to be what is typed in the form
  // heading.innerText = e.target.value
  


  // Get input value
  // console.log(taskInput.value);
  
  // Prevents default behaviour (such as redirecting)
  // e.preventDefault()
  
}


