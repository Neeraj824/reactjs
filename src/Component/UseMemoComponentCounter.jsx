import React, { useMemo, useState } from 'react'
function UseMemoComponentCounter() {
    const [countone,setCountOne] = useState(0)
    const [counttwo,setCountTwo] = useState(0)

    const incrementOne = () => {
        setCountOne(countone+1)
    }

    const incrementTwo = () => {
        setCountTwo(counttwo+1)
    }

    // Here is some perfomarce issue and when we user counter in countone perfomace is impacted on counttwo also.
    // To resovled this issue we have to use usememo below is example.
    const isEven = useMemo(() => {
        let i = 0
        while(i< 20000000) i++
        return countone % 2 === 0
    },[countone]) 
  return (
    <div>
      <button onClick={incrementOne}>Count One - {countone}</button>
      {isEven ? 'Even' : 'Odd'}
      <button onClick={incrementTwo}>Count Two- {counttwo}</button>
    </div>
  )
}
export default UseMemoComponentCounter
