import React from 'react'
import Task from './Task'
import SingleDate from './SingleDate'
import "./ActivityCard.css"

function ActivityCard() {
  return (
    <div className='singleCard'>
     <Task />
     <div>
        <SingleDate />
     </div>
    </div>
  )
}

export default ActivityCard