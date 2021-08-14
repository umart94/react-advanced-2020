import React, { useState, useEffect } from 'react'

// cleanup function
// second argument
//check for width of the window
//set up event listener on window object
const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('cleanup')
      //useEffect can return a function
      //in this case a callback function
      //what we can do is removeEventlistener here (cleanup)
      //this will be called after every re render
      //so it will remove previous event listener and
      //add the resize event listener simultaneously
      window.removeEventListener('resize', checkSize)
    }
  })
  console.log('render')
  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  )
}

export default UseEffectCleanup
