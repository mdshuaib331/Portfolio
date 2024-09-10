import React from 'react'
import './Skill.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
const Skill = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My SKills</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="services-container">
        {Services_Data.map((skill,index)=>{
           return <div key={index} className="services-format">
            <h3></h3>
            <h2>{skill.s_name}</h2>
            <img src={skill.s_img} alt="" />
           </div>
        })}
      </div>
    </div>
  )
}

export default Skill