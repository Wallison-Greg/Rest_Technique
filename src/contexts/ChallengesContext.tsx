"use client";
import { createContext, useState, ReactNode } from "react";
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    expreienceToNextLevel: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
}

interface ChallengesProviderProps { //definindo a tipagem 
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider ({children}: ChallengesProviderProps) { //passando a tipagem da children

    const [level, setLevel] = useState(0);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChellengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const expreienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp (){
        setLevel(level +1);
    }

    function startNewChallenge (){
        const randomChallengensIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengensIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge (){
        setActiveChallenge(null);
    }

    function completeChallenge (){
        if(!activeChallenge){
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= expreienceToNextLevel){

            finalExperience = finalExperience - expreienceToNextLevel;

            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChellengesCompleted(challengesCompleted + 1);
    }

    return (
        <ChallengesContext.Provider 
            value={{
                level,
                currentExperience,
                challengesCompleted,
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                expreienceToNextLevel,
                completeChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}

//obs: no caso da tipagem da childrem no exemplo a cima no context, passamos como tipagem o elemento "ReactNode" ja que nesse caso a children n ira receber so valores do tipo string