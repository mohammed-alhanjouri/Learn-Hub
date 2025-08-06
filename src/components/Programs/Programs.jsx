import React from 'react'
import './Programs.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import programIcon1 from '../../assets/program-icon1.png'
import programIcon2 from '../../assets/program-icon2.png'
import programIcon3 from '../../assets/program-icon3.png'

const Programs = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
                {/* <img src={programIcon1} alt="" /> */}
                <p>Bachelor Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                {/* <img src={programIcon2} alt="" /> */}
                <p>Master Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
                {/* <img src={programIcon3} alt="" /> */}
                <p>Postgraduate Degree</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
