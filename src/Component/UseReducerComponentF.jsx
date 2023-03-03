import React, { useContext } from 'react'
import {CountContext} from '../AppF'
function UseReducerComponentF() {
    const countContext = useContext(CountContext)
  return (
    <div>
        Component F
        Count-{countContext.countState}
        <button onClick={ () => countContext.countDispatch('increment')}>Increment</button>
        <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerComponentF
