import React, { useContext } from 'react'
import Button from './Button'
import { countContext } from '../Context'

const DisplayCount = (props) => {
    const {count} = useContext(countContext);
    
  return (
    <div>
      <p><strong>Click on the button below to watch the count go up!</strong></p>
      Count: <strong>{count}</strong>
      <Button />
    </div>
  )
}

export default DisplayCount
