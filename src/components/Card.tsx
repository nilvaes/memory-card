import type { CardType } from "../hooks/useGame";

export default function Card({
  card,
  onClick,
}: {
  card: CardType;
  onClick: (card: CardType) => void;
}) {
  return (
    <div
      className={`card ${card.isFlipped ? "flipped" : ""} ${
        card.isMatched ? "matched" : ""
      }`}
      onClick={() => onClick(card)}
    >
      <div className="card-front">?</div>
      <div className="card-back">
        <img className="rounded-2xl" src={`assets/${card.value}`} />
      </div>
    </div>
  );
}
