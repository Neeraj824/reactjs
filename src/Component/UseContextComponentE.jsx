import {React, useContext} from 'react'
import UseContextComponentF from './UseContextComponentF'
import {UserContext, ChannelContext} from '../App'

//2nd way to define useContent
function UseContextComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
        {/* 2nd way to declare useContent */}
        {user}- {channel} 
      <UseContextComponentF/>
    </div>
  )
}

export default UseContextComponentE
