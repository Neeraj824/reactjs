import React from 'react'

const FRIinput = React.forwardRef((props,ref) => {
    return (
        <div>
          <input type="text" ref={ref} />
        </div>
      )
})

export default FRIinput
