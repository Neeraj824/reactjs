import React, { useEffect, useState } from 'react'
import CustomComponentUseEffect from './CustomComponentUseEffect'

function CustomComponentDocTitleTwo() {
    const [count,setCount] = useState(0)
    CustomComponentUseEffect(count)
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Count-{count}</button>
    </div>
  )
}

export default CustomComponentDocTitleTwo
