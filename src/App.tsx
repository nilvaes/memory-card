import Card from "./components/Card";
import GameHeader from "./components/GameHeader";
import WinMessage from "./components/WinMessage";
import { useGame, type CardType } from "./hooks/useGame";

const cardValues: CardType[] = [
  {
    id: 1,
    value: "drawing.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 2,
    value: "helmet.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 3,
    value: "shoes.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 4,
    value: "stones.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 5,
    value: "tea.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 6,
    value: "tree.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 7,
    value: "writing.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 8,
    value: "yelpaze.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 9,
    value: "drawing.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 10,
    value: "helmet.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 11,
    value: "shoes.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 12,
    value: "stones.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 13,
    value: "tea.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 14,
    value: "tree.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 15,
    value: "writing.png",
    isFlipped: false,
    isMatched: false,
  },
  {
    id: 16,
    value: "yelpaze.png",
    isFlipped: false,
    isMatched: false,
  },
];

function App() {
  const {
    cards,
    moves,
    score,
    isGameComplete,
    handleCardClick,
    initializeGame,
  } = useGame(cardValues);
  return (
    <div className="app">
      <div className="app-layout">
        <div className="side-panel">
          <GameHeader score={score} moves={moves} onReset={initializeGame} />
          {isGameComplete && <WinMessage moves={moves} />}
        </div>
        <div className="board">
          <div className="cards-grid">
            {cards.map((card) => (
              <Card card={card} onClick={handleCardClick} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
