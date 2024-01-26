import React from 'react'
import Style from '../style/components/ExperienceBar.module.css'

const ExperienceBar = () => {
  return (
    <div className={Style.experienceBar}>
        <span>0 xp</span>
        <div>
            <div style={{width: '50%'}}></div>
            <span className={Style.currentExperience} style={{left: '50%'}}>300 xp</span>
        </div>
        <span>600 xp</span>
    </div>
  )
}

export default ExperienceBar