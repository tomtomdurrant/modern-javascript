const clearBtn = document.querySelector('.clear-tasks')

const card = document.querySelector('.card')

const heading = document.querySelector('h5')

// Click
// clearBtn.addEventListener('click', runEvent)

// Double Click
// clearBtn.addEventListener('dblclick', runEvent)

// Mouse Down
// clearBtn.addEventListener('mousedown', runEvent) // Click and hold down

// Mouse Up
// clearBtn.addEventListener('mouseup', runEvent) // Click and hold down, fires on mouse up

// Mouse Enter
// card.addEventListener('mouseenter', runEvent) // When the mouse enters the card

// Mouse Leave
// card.addEventListener('mouseleave', runEvent) // When the mouse leaves the card

// Mouse Over
// card.addEventListener('mouseover', runEvent) // When the mouse hovers over the card, will fire off when you go over a child element

// Mouse Out
// card.addEventListener('mouseout', runEvent) // When the mouse stops hovering over the card, will fire off when you go over a child element

// Mouse Move
card.addEventListener('mousemove', runEvent) // Any movement inside the card will fire this event



// Event Handler
function runEvent(e){
  console.log(`EVENT TYPE ${e.type}`)
  heading.textContent = `Mouse X: ${e.offsetX}, Mouse Y: ${e.offsetY}`

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}