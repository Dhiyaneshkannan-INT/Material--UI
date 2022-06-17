import React from 'react'
import Child from './index2'
import 'bootstrap/dist/css/bootstrap.min.css';
 

const Parent = (props) => {
  return (
    <div>
        <h1>Hello, {props.name}</h1>
        <h1>Your Emp ID: {props.empid}</h1>
        <Child empskill="coder"></Child>
 
    </div>
  )
}

export default Parent