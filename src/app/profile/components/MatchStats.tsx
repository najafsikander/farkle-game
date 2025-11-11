import { User } from "@clerk/nextjs/server";
import { FC } from "react";

type Props = {
    user:User;
}
const MatchStats:FC<Props> = ({}) => {
    return(
        <>
        <section className="w-full flex gap-5">
            <div className="w-1/3 bg-white rounded-lg p-3 text-center">
                <h2 className="text-xl font-bold text-slate-800">Matches Played</h2>
                <p className="text-3xl font-semibold text-slate-600">120</p>
            </div>
            <div className="w-1/3 bg-white rounded-lg p-3 text-center">
                <h2 className="text-xl font-bold text-slate-800">Matches Won</h2>
                <p className="text-3xl font-semibold text-slate-600">90</p>
            </div>
            <div className="w-1/3 bg-white rounded-lg p-3 text-center">
                <h2 className="text-xl font-bold text-slate-800">Matches Lost</h2>
                <p className="text-3xl font-semibold text-slate-600">30</p>
            </div>
        </section>
        </>
    )
}

export default MatchStats;