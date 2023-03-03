import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [X,setX] = useState(0)
    const [Y,setY] = useState(0)

    useEffect( () => {
        console.log("Mouse Effect")
        window.addEventListener('mousemove',LogMousePosition)

        return () => {
            window.removeEventListener('mousemove',LogMousePosition)
        }

    },[])
    const LogMousePosition =  e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    

  return (
    <div>
      X: {X} Y:{Y}
    </div>
  )
}

export default HookMouse
