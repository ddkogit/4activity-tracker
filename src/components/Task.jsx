import React, { useState } from 'react'
import SingleDate from './SingleDate';

function Task({activity,today,handleDelete,index}) {


    const dateArray = Array.from({length:31},(_,index)=>index+1);

    const [date,setDate] = useState(dateArray);


    

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
              <SingleDate  item={item}/>
            ))
        }

        <button  onClick={()=>handleDelete(index)}>X</button>

    </div>
  )
}

export default Task