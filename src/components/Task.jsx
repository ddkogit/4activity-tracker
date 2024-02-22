import React from 'react'

function Task({activity,today,handleDelete,index}) {


  return (
    <div style={{
        height:"200px",
        backgroundColor:"aqua",
        width:"150px"
    }}>
        <p>{activity}</p>
        <p>{today}</p>
        {
         Array.from({length:31}.map((_,index)=>(
            <div key={index}>
                <button>{index+1}</button>
            </div>
        )))
    }
        <button  onClick={()=>handleDelete(index)}>X</button>

    </div>
  )
}

export default Task