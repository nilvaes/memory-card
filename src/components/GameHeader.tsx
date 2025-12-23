export default function GameHeader() {
  return (
    <div id="game-header" className="flex flex-col">
      <h1>Memory Card Game</h1>
      <div className="flex justify-between">
        <div>
          <span>Score:</span> <span>0</span>
        </div>
        <div>
          <span>Moves:</span> <span>0</span>
        </div>
      </div>
    </div>
  );
}
