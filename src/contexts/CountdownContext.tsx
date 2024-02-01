"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
    minutes: number;
    secondes: number;
    hasFinished: boolean;
    active: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps { //definindo a tipagem 
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownContextProvider ({children}: CountdownProviderProps) {

    const {startNewChallenge} = useContext(ChallengesContext)

    const [time, setTime] = useState(0.1 * 60);
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    
    const minutes = Math.floor(time / 60);
    const secondes = time % 60;

    function startCountdown () {
        setActive(true);
    }

    function resetCountdown () {
    clearTimeout(countdownTimeout);
    setHasFinished(false);
    setActive(false);
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
        <CountdownContext.Provider
            value={{
                minutes,
                secondes, 
                hasFinished,
                active,
                startCountdown,
                resetCountdown
            }}
        >
            {children}
        </CountdownContext.Provider>
    )
}