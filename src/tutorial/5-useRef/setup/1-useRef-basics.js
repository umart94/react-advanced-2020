import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements
//by default set useRef(null)

const UseRefBasics = () => {

  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);//this is initially null, but once we submit form it is the value of the input tag.
    console.log(divContainer.current);//this is initially null, but once we submit form it is the value of the entire div tag.


  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  })



  return <React.Fragment>
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={refContainer} />
        <button type="submit">submit</button>
      </div>
    </form>
    <div ref={divContainer}>hello world</div>
  </React.Fragment>;
};

export default UseRefBasics;
