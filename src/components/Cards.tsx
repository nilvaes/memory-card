import type { CardValue } from "../hooks/useGame";
type CardsProps = {
  cards: CardValue[];
  onClick: (card: CardValue) => void;
};

export default function Cards({ cards, onClick }: CardsProps) {
  return (
    <div className="grid grid-cols-4 gap-4 m-2">
      {cards.map((card) => {
        const showFront = card.isFlipped;
        return (
          <button
            key={card.id}
            onClick={() => onClick(card)}
            className="relative flex items-center justify-center bg-slate-700 rounded p-4 h-32"
          >
            {showFront ? (
              <img
                src={card.imgSrc}
                alt={card.label}
                className="w-24 h-24 object-contain"
              />
            ) : (
              <div className="flex items-center justify-center w-24 h-24 rounded bg-slate-900 text-6xl text-slate-200">
                ?
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
