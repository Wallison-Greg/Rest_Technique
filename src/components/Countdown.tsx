"use client"; // This is a client component
import { useState, useEffect, useContext } from 'react';
import Style from '../style/components/Countdown.module.css';
import { CountdownContext } from '../contexts/CountdownContext';

export function Countdown() {

  const { minutes, secondes, hasFinished, active, resetCountdown, startCountdown} = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondeLeft, secondeRight] = String(secondes).padStart(2, '0').split('');

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
