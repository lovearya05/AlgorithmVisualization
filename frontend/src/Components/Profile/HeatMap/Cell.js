import React from 'react'
import "./Cell.css"
import moment from "moment"

const Cell = ({startdate, index}) => {

  // console.log()

  //  Boolean yes = startdate._d == currentDa
    
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


  return (
    <div className={`${date === index  ? 'green' : 'timeline-cell'}`}>
    </div>
  )
}

export default Cell
