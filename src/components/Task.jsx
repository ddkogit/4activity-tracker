import React, { useState } from 'react'
import SingleDate from './SingleDate';
import "./Task.css"

function Task({activity,today,handleDelete,index}) {


    const dateArray = Array.from({length:31},(_,index)=>index+1);

    const [date,setDate] = useState(dateArray);


    

  return (
    <div className='card'>


    <div className='left' >
        <h1 className='activityTo'>{activity}</h1>
        <p>{today}</p>
        </div>
        
      <div className='right'>
        {
            date.map((item)=>(
              <SingleDate  item={item} key={item}/>
            ))
        }

        <button  onClick={()=>handleDelete(index)} className='danger' >X</button>

    </div>
    </div>
  )
}

export default Task