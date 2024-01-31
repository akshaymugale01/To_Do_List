import React from 'react'

function Debounce() {

    const handleChnage = () => {
        console.log("apli call...")
    }

    function debounce(fn, delay) {
        let timer
        return function (...args) {
          clearTimeout(timer)
          timer = setTimeout(()=>fn(...args), delay)
        }
    }

  return (
    <div>
      <p>Search</p>
      <input type="search" onChange={debounce(handleChnage,500)} />
    </div>
  )
}

export default Debounce;