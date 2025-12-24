export default function GameHeader({
  score,
  moves,
}: {
  score: number;
  moves: number;
}) {
  return (
    <div
      id="game-header"
      className="flex flex-col text-slate-300 justify-center mx-2 items-center py-2 px-10 rounded"
    >
      <h1 className="font-bold text-2xl">Memory Card Game</h1>
      <div className="flex gap-5 mt-4">
        <div>
          <span>Score:</span> <span>{score}</span>
        </div>
        <div>
          <span>Moves:</span> <span>{moves}</span>
        </div>
      </div>
    </div>
  );
}
