import Cards from "./components/Cards";
import GameHeader from "./components/GameHeader";
import { useGame } from "./hooks/useGame";

function App() {
  const { cards, score, moves, startGame } = useGame();

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-slate-800">
      <GameHeader score={score} moves={moves} onStart={startGame} />
      <Cards cards={cards} />
    </div>
  );
}

export default App;
