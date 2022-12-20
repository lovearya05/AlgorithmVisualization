import React from 'react'
import Cell from "./Cell"
import "./Cell.css"
import moment from "moment"

const weekDays = {
  1:'Mon',
  3:"Wed",
  5:'Fri',
}

function Week({index}) {
  return(
    <div className='week'>
      {weekDays[index]} 
    </div>
  )
}

function HeatMonths({startdate, index}) {
  
  let date = moment(startdate).add(index, 'day')
  let monthName = date.format("MMM")
  return (
    <div className={`months ${monthName}`}>
       {monthName}
    </div>
  )
}

const Timeline = ({range}) => {

    let days = Math.abs(range[0].diff(range[1], 'days'))
    let cellsCount = Array.from(new Array(days))
    let weeks = Array.from(new Array(7))
    let months = Array.from(new Array(Math.floor(days/7)))


  return (
    <div className='timeline'>
      {/* <div className='timeline-months'>
        {months.map((_, index) => <HeatMonths key={index} index={index} startdate={range[0]} /> )}
      </div> */}
      <div className="timeline-body">
        <div className='timeline-weeks'>
         {weeks.map((_, index) => <Week key={index} index={index} startdate={range[0]} /> )}  
         </div>
        <div className="timeline-cells">
          {
            cellsCount.map((_, index) => <Cell key={index} index={index} startdate={range[0]} />
            )}
        </div>
      </div>
    </div>
  )
}

export default Timeline
