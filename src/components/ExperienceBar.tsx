"use client";
import React, {useContext} from 'react'
import Style from '../style/components/ExperienceBar.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'

const ExperienceBar = () => {

  const { currentExperience, expreienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / expreienceToNextLevel;

  return (
    <div className={Style.experienceBar}>
        <span>0 xp</span>
        <div>
            <div style={{width: `${percentToNextLevel}%`}}></div>
            <span className={Style.currentExperience} style={{left: `${percentToNextLevel}%`}}>{currentExperience} xp</span>
        </div>
        <span>{expreienceToNextLevel} xp</span>
    </div>
  )
}

export default ExperienceBar