'use client';
import { useEffect, useState } from "react";
import GoalScoreInput from "./GoalScoreInput";

type userTurn = {
    player: string;
    score: number;
}

// Main score area component to manage the game score and turns.
const ScoreArea = () => {

    let score:number = 0;

    const [goal, setGoal] = useState<number>(0);
    const [currTurn, setCurrTurn] = useState<number>(0);
    const [playersStats, setPlayersStats] = useState<userTurn[]>([]);

    //Adding score to the players stats in each turn and maintain history.
    const setScore = (scoreVal:number) => {
        score = scoreVal;
        console.log("Score: ", score,scoreVal,currTurn);

        if(currTurn === 1){
            setPlayersStats((prevState) => {
                const turn:userTurn = {
                    player: "Player 1",
                    score: score,
                }

                return [...prevState, turn];
            });
            setCurrTurn(2);
        }

        if(currTurn === 2){
            setPlayersStats((prevState) => {
                const turn:userTurn = {
                    player: "Player 2",
                    score: score,
                }

                return [...prevState, turn];
            });
            setCurrTurn(1);
        }
    }

    //Function to get the total score accumulated by the players.
    const getTotalPlayerStore = (currTurn:number) => {
        const filteredStats = playersStats.filter((player) => player.player === (currTurn === 1 ? "Player 1" : "Player 2"));
        const playerScore = filteredStats.reduce((acc, curr) => acc + curr.score, 0);
        return playerScore;
    }

    //Effect to start the game.
    useEffect(() => {
        if(goal >= 1000 && goal <= 5000) return setCurrTurn(1);
        setCurrTurn(0);
    },[goal]);

    //Effect to log the players stats.
    useEffect(() => {
        console.log("Players Stats: ", playersStats);
        if(playersStats.length === 0) return;
       const playerOneScore = getTotalPlayerStore(1);

        console.log("Player 1 Score: ", playerOneScore);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[playersStats]);

    return(
        <>
        {/* Using component to set goal and start game */}
        <GoalScoreInput purpose="setGoal" setGoal={setGoal} setTurn={setCurrTurn} min={1000} max={5000}/>
        <section className="w-full mt-5 text-center">
        {/* Displaying current goal */}
        <h1 className="text-4xl font-bold">Goal: {goal}</h1>
        {currTurn}
        {/* Using component to add score for players in their respective turn */}
        <GoalScoreInput purpose="setScore" setGoal={setScore}/>
        </section>
        </>
    );
}

export default ScoreArea;