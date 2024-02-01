"use client";
import { useContext } from 'react';
import Style from '../style/components/Profile.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {

  const {level} = useContext(ChallengesContext)

  return (
    <div className={Style.profileContainer}>
        <img src="https://github.com/Wallison-Greg.png" alt="foto perfil" />
        <div>
            <strong>Wallison Gregorio</strong>
            <p>
              <img src="icons/level.svg" alt="level" />
              Level : {level}
            </p>
        </div>
    </div>
  )
}
