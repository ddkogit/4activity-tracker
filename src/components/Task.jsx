import React, { useState } from 'react'

function Task({activity,today,handleDelete,index}) {


    const dateArray = Array.from({length:31},(_,index)=>index+1);

    const [date,setDate] = useState(dateArray);
    const [color,setColor] = useState('');


    const toggleClass=()=>{

    }

  return (
    <div style={{
        height:"200px",
        backgroundColor:"aqua",
        width:"150px"
    }}>
        <p>{activity}</p>
        <p>{today}</p>
      
        {
            date.map((item)=>(
                <button onClick={toggleClass} style={{
                    backgroundColor:color
                }} >{item}</button>
            ))
        }

        <button  onClick={()=>handleDelete(index)}>X</button>

    </div>
  )
}

export default Task