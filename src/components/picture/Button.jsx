import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button data-animal={props.data_animal} onClick={props.changeID} id={props.id}>
        {props.label}
      </button>
    </div>
  )
}

export default Button
