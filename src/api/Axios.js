 import  Axios from 'axios'
import {useEffect, useState} from 'react'
import React from 'react';
 
 function Learning () {

    const [data, setData] = useState([])

    useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        console.log(res.data)
        setData(res.data)
        }).catch(err => console.log(err))
        }, [])
        
    const arr = data.map((data) =>{
    return (
    <tr>
    <td>{data.id}</td>
    <td>{data.title}</td>
    <td>{data.body}</td>
    </tr>
    )
    })
    
    return(
    <div>
        <h1>UseEffect & UseState</h1>
    <table>
      <tr>
        <th> ID </th>
        <th> Title</th>
        <th> Body</th>
      </tr>
  {arr}
    </table>
    
    </div>
    );
    }
    
 export default Learning;