import Cards from "./components/Cards";
import GameHeader from "./components/GameHeader";

function startGame() {
  return console.log("hello world");
}

function App() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-slate-800">
      <GameHeader score={10} moves={10} onStart={startGame} />
      <Cards />
    </div>
  );
}

export default App;
