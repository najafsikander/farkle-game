type userTurn = {
  player: string;
  score: number;
};

type Props = {
  goal: number;
  playersStats: userTurn[];
  getTotalPlayerStore: (currTurn: number) => number;
};

const PlayersStats: React.FC<Props> = ({
  goal,
  playersStats,
  getTotalPlayerStore,
}) => {
  return (
    <>
      {goal > 0 && (
        <section className="w-full flex flex-row justify-center gap-5 mt-3">
          {["Player 1", "Player 2"].map((player: string) => (
            <div className="text-center w-[30%]" key={player}>
              <h1 className="text-3xl font-bold">{player} Score</h1>

              <div className="mt-3 flex flex-row justify-center">
                <ul className="w-[30%] pb-1 mb-3 border-b-2 border-white">
                  {playersStats
                    .filter((p) => p.player === player)
                    .map((p: userTurn) => (
                      <li className="text-xl mb-2" key={p.score}>
                        +{p.score}
                      </li>
                    ))}
                </ul>
              </div>
              <div>{getTotalPlayerStore(+player.split(" ")[1])}</div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default PlayersStats;
