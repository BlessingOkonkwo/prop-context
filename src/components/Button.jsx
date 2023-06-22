import React, { useContext } from 'react'
import { countContext } from '../Context'

const Button = () => {
    const {setCount, decreaseCount} = useContext(countContext);

    const addCount = () => {
        setCount((count) => count + 1)
    }
  return (
    <div>
      <button style={{margin:"5px"}} onClick={decreaseCount}>Decrease Count</button>
      <button style={{margin:"5px"}} onClick={addCount}>Increase Count</button>
    </div>
  )
}

export default Button
