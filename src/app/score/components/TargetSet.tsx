"use client";
import { useRef } from "react";

type Props = {
  setGoal: (goal: number) => void;
};
const TargetSet: React.FC<Props> = ({ setGoal }) => {
  const targetRef = useRef<HTMLInputElement>(null);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const targetValue = targetRef.current?.value;
    if (targetValue) {
        setGoal(parseInt(targetValue));
    }
  }
  return (
    <>
      <div className="w-full text-center">
        <h3 className="text-2xl mb-3">Set Target Score!</h3>
        <form className="flex flex-row gap-2 justify-center" onSubmit={(e) => submitForm(e)}>
            <div className="flex flex-col gap-2">
              <input
                ref={targetRef}
                type="number"
                placeholder="Target Score"
                min="1000"
                max="5000"
                className="w-full border-white border-2 rounded-md p-2 text-white"
              />
              <span>
                Set the target for the game. It should be between 1000 - 5000
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

export default TargetSet;
