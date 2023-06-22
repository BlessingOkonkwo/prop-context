import React from 'react'

const Picture = (props) => {
  return (
    <div>
        <div style={{width:"100px", height:"100px"}}>
            <img src={props.src} alt="A pic" width="100%" height="100%" />
        </div>
        {props.children}
    </div>
    
  )
}

export default Picture
