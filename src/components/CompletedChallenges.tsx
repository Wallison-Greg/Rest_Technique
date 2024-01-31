"use client";
import { ChallengesContext } from '../contexts/ChallengesContext';
import Style from '../style/components/CompletedChallenges.module.css';
import { useContext } from 'react';

export function CompletedChallenges() {

  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={Style.completedChallengesContainer}>
        <span>Desafios Completos</span>
        <span>{challengesCompleted}</span>
    </div>
  )
}
