import type { CardValue } from "../hooks/useGame";

export default function Cards({ cards }: { cards: CardValue[] }) {
  return (
    <div className="grid grid-cols-4 gap-4 m-2">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col items-center bg-slate-600 shadow rounded p-4"
        >
          <img
            src={card.imgSrc}
            alt={card.label}
            className="w-24 h-24 object-contain"
          />
        </div>
      ))}
    </div>
  );
}
