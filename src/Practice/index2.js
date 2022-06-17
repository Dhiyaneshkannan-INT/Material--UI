import React from 'react'
import Index3 from './index3';

const Child = (props) => {
  return (
    <div>
        <h1 style={{color:"red"}}> My Skills: {props.empskill}</h1>
        <Index3 location="Chennai"  degree="BE" name="Dhiyanesh"></Index3>
       
    </div>
  )
}

export default Child;