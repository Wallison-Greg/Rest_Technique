"use client";
import React, { useContext } from 'react'
import Style from '../style/components/ChallengeBox.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext';

export function ChallengeBox() {

    const {activeChallenge, resetChallenge} = useContext(ChallengesContext);

    //const hasActiveChallenge = true;

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
                        <button type='button' className={Style.challengFailedBtn} onClick={resetChallenge}>Falhei</button>
                        <button type='button' className={Style.challengSucceedBtn}>Completei</button>
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
