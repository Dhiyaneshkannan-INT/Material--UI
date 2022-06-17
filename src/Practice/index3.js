import React from 'react'

const Index3 = (props) => {
  return (
    <div>
        <h1 style={{color:"blue"}}>
            Location:{props.location}</h1>
           <h1> Degree:{props.degree}
        </h1>
        <h1> Name:{props.name}</h1>
         
    </div>
  )
}

export default Index3