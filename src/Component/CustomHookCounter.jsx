import React, { useEffect, useState } from 'react'

function CustomHookCounter() {
    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount+1)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {

    }

  return (
    <div>
        <button onClick={increment}>Increment-{count}</button>
        <button onClick={decrement}>Decrement-{count}</button>
        <button onClick={reset}>Reset</button>
      
    </div>
  )
}

export default CustomHookCounter
