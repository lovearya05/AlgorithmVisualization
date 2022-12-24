import React from 'react'
import Timeline from './HeatMap/Timeline'
import "./Profile.css"
import moment from "moment"
import Navbar from "../Navbar/Navbar"


const Profile = () => {

  let daterange = [moment().add(365, 'days'), moment()];

  return (
    <>
    <Navbar />
    <div className="profile">
      <div className='leftSide'>
        <h2>Helo</h2>
      </div>
      <div className="rightSide">
        <div className='details'>
            <h2>Basic Details</h2>
          <div className='iconWithDt'>
           <div className='list_icon'>
            <div className='icon'>
                <p>Harmandeep Singh</p>
            </div>
            <div className='icon'>
                <p>Harmandeep Singh</p>
            </div>
           </div>
           <div className='list_icon'>
            <div className='icon'>
              <p>Harmandeep Singh</p>
            </div>
            <div className='icon'>
              <p>Harmandeep Singh</p>
            </div>
           </div>
           
          </div>
        </div>
        <div className='heatMap'>
            <h2>Daily Contributions</h2>

            <Timeline range={daterange}/>
        </div>
        <div className="recent">
            <h2>Recent algorithms</h2>
            <div className="list_recent">
              <div className="listFirst">
                <p className='algo'>Bubble Sort</p>
                <p className='time'>24-jan-2022</p>
              </div>
              <div className="listSecond">
                <p className='algo'>Bubble Sort</p>
                <p className='time'>24-jan-2022</p>
              </div>
              <div className="listFirst">
                <p className='algo'>Bubble Sort</p>
                <p className='time'>24-jan-2022</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile
