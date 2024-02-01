"use client";
import React, { useContext } from 'react'
import Style from '../style/components/ChallengeBox.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

export function ChallengeBox() {

    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);

    function handleChallengeSucceeded (){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed (){
        resetChallenge();
        resetCountdown();
    }

  return (
    <div className={Style.challengeBoxContainer}>
        { activeChallenge ? (
                <div className={Style.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="desafio" />
                        <strong>Novo desafio.</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                            type='button' 
                            className={Style.challengFailedBtn} 
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button 
                            type='button' 
                            className={Style.challengSucceedBtn} 
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={Style.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level up" />
                        Avance de level completando os desafios.
                    </p>
                </div>
            )
        }
    </div>
  )
}
