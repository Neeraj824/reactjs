import React, { useCallback, useState } from 'react'
import UseCallbackButton from './UseCallbackButton'
import UseCallbackCount from './UseCallbackCount'
import UseCallbackTitle from './UseCallbackTitle'

function UseCallbackParent() {
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(5000)

    const incrementAge = useCallback(() => {
        setAge(age+1)
    },[age]) 

    const incrementSalary = useCallback(() => {
        setSalary(salary+1000)
    },[salary])  

  return (
    <div>
        <UseCallbackTitle />
        <UseCallbackCount text="Age" count={age}/>
        <UseCallbackButton handleClick={incrementAge}>Increment Age</UseCallbackButton> 
        <UseCallbackCount text="Salary" count={salary}/>
        <UseCallbackButton handleClick={incrementSalary}>Increment Salary</UseCallbackButton> 
    </div>
  )
}

export default UseCallbackParent
