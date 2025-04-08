'use client';
import { useState } from "react";
import TargetSet from "./TargetSet";

const ScoreArea = () => {
    const [goal, setGoal] = useState<number>(0);

    return(
        <>
        <TargetSet setGoal={setGoal}/>
        <section className="w-full mt-5 text-center">
        <h1 className="text-4xl font-bold">Goal: {goal}</h1>
        </section>
        </>
    );
}

export default ScoreArea;