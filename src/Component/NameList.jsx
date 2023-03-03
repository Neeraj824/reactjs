import React from 'react'

function NameList() {
    const names = ["Neeraj","Ajay","Pankaj"]
    const nameList = names.map((name, index)=> <h1 key={index}>{name}</h1>)
  return (<div>{nameList}</div>
  )
}
 
export default NameList
