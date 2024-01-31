"use client"; // This is a client component
import { useState, useEffect, useContext } from 'react';
import Style from '../style/components/Countdown.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

let countdownTimeout: NodeJS.Timeout;


export function Countdown() {

  const {startNewChallenge} = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60);
  const [active, setActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  
  const minutes = Math.floor(time / 60);
  const secondes = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondeLeft, secondeRight] = String(secondes).padStart(2, '0').split('');

  function startCountdown () {
    setActive(true);
  }

  function resetCountdown () {
    clearTimeout(countdownTimeout)
    setActive(false)
    setTime(25 * 60);
  }

  useEffect(() => {
    if(active && time > 0){
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000) 
    } else if (active && time === 0){
      setHasFinished(true);
      setActive(false)
      startNewChallenge();
    }
  }, [active, time])

  return (
    <div>
        <div className={Style.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondeLeft}</span>
                <span>{secondeRight}</span>
            </div>
        </div>

        { hasFinished ? (
          <button type='button' className={Style.countdownButton} disabled>
            ciclo finalizado
          </button>
        ) : 
          <>
            { active ? (
              <button type='button' className={`${Style.countdownButton} ${Style.countdownButtonActive}`} onClick={resetCountdown}>
                abandonar ciclo
              </button> ) : (
              <button type='button' className={Style.countdownButton} onClick={startCountdown}>
                iniciar um ciclo
              </button> )
            }
          </>
        }
    </div>
  )
}
