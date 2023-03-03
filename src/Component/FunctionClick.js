import React from 'react'

function FunctionClick() {
    function clickHandler() {
        alert("Button Click")
        console.log("Button Click")
    } 
    
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}
 
export default  FunctionClick
