"use client";
import { useRef } from "react";

type Props = {
  purpose: string;
  min?:number;
  max?:number;
  setGoal?: (goal: number) => void;
  setTurn?: (turn: number) => void;
};
// Reusable Component to set the goal and score of the game.
const GoalScoreInput: React.FC<Props> = ({ purpose, min, max,setGoal, setTurn }) => {
  
  const targetRef = useRef<HTMLInputElement>(null);

  // Submit function to set the goal and score of the game.
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const targetValue = targetRef.current?.value;
    if (targetValue) {
        if(purpose === "setGoal") {
          const target = parseInt(targetValue);
          if(setGoal) setGoal(target);
          if(setTurn) setTurn(1);
        }

        if(purpose === "setScore") {
          const target = parseInt(targetValue);
          if(setGoal) setGoal(target);
        }
    }
  }
  return (
    <>
      <div className="w-full text-center mt-5">
        {
          purpose === "setGoal" &&
          <h3 className="text-2xl mb-3">Set Target Score!</h3>
        }
        <form className="flex flex-row gap-2 justify-center" onSubmit={(e) => submitForm(e)}>
            <div className="flex flex-col gap-2">
              <input
                ref={targetRef}
                type="number"
                placeholder={purpose === "setGoal" ? "Target Score" : "Player Score"}
                min={min||undefined}
                max={max||undefined}
                className="w-full border-white border-2 rounded-md p-2 text-white"
              />
              <span>
                {purpose === "setGoal" ? 'Set the target for the game. It should be between 1000 - 5000': 'Set the score for the player, earned during the turn.'}
              </span>
            </div>
            <button
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </form>
      </div>
    </>
  );
};

export default GoalScoreInput;
