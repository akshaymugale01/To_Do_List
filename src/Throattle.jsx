import React from 'react'

function Throattle() {

    const handleChnage = () => {
        console.log("apli call...")
    }

    const handleMouseMove = e => {
        //everytime the mouse moved this function will be invoked
        console.log('api call to do some operations...')
    }

    function throttle(fn, delay) {
      let run = false
      return function (...args) {
        if (!run) {
          fn(...args)
          run = true
          setTimeout( () => run = false, delay)
        }
      }
    }

   //event listener to track the movement of the mouse
  window.addEventListener('mousemove',throttle(handleMouseMove,1000))

  return (
    <div>
      <p>Search</p>
      <input type="search" onChange={handleChnage} />
    </div>
  )
}

export default Throattle;
