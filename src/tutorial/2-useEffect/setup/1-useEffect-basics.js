import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// used to run side effect
//side effect could be anything that runs outside of the component

const UseEffectBasics = () => {

  const [value,setValue] = useState(0);

  
  useEffect(()=>{
    //runs after every re-render
    console.log('call useEffect');
    if(value >= 1){
    
    document.title = `New Messages (${value})`;
    }
  },[value]);//pass a list(array) of dependencies
//if we pass in an empty array as second parameter here
//useEffect will run only on initial render and not on every re render
//whatever value we pass as second parameter will trigger to call the useEffect

  useEffect(()=>{
      console.log('hello world');
  },[]);
  console.log('render component');

  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className="btn" onClick={
        () => {
          setValue(value + 1)
        }
      }>click me</button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
