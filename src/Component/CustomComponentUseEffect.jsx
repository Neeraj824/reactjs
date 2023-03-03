import { useEffect } from "react"
function CustomComponentUseEffect(count) {
    useEffect( () =>{
        document.title = `Count - ${count}`
    },[count])
}

export default CustomComponentUseEffect
