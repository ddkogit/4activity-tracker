import React from 'react'
import Task from './Task'
import SingleDate from './SingleDate'

function ActivityCard() {
  return (
    <div>
     <Task />
     <div>
        <SingleDate />
     </div>
    </div>
  )
}

export default ActivityCard