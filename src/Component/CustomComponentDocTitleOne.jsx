import React, { useEffect, useState } from 'react'
import CustomComponentUseEffect from './CustomComponentUseEffect'

function CustomComponentDocTitleOne() {
    const [count,setCount] = useState(0)
    // useEffect( () =>{
    //     document.title = `Count - ${count}`
    // },[count])
    CustomComponentUseEffect(count)
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Count-{count}</button>
    </div>
  )
}

export default CustomComponentDocTitleOne
