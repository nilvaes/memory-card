import { useCallback, useEffect, useMemo, useState } from "react";

export type CardValue = {
  id: number;
  isMatched: boolean;
  isFlipped: boolean;
  imgSrc: string;
  label: string;
};

const cardValues: string[] = [
  "drawing.png",
  "helmet.png",
  "shoes.png",
  "stones.png",
  "tea.png",
  "tree.png",
  "writing.png",
  "yelpaze.png",
  "drawing.png",
  "helmet.png",
  "shoes.png",
  "stones.png",
  "tea.png",
  "tree.png",
  "writing.png",
  "yelpaze.png",
];

const shuffle = <T>(arr: T[]) => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const buildDeck = (): CardValue[] =>
  imageFiles.flatMap((file) => {
    const label = file.replace(".png", "");
    const imgSrc = `/assets/${file}`;
    return [
      { id: `${label}-a`, isMatched: false, isFlipped: false, imgSrc, label },
      { id: `${label}-b`, isMatched: false, isFlipped: false, imgSrc, label },
    ];
  });

export function useGame() {
  const baseDeck = useMemo(() => buildDeck(), []);
  const [cards, setCards] = useState<CardValue[]>([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const handleCardClick = (card: CardValue) => {
    // dont allow clicking if card is already flipped or matched
    if (card.isFlipped || card.isMatched) {
      return;
    }
    // update card flipped state
    const newCards = cards.map((c: CardValue) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });
    setCards(newCards);

    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    // check for match if two cards are flipped
    if (flippedCards.length === 1) {
      const firstCard = cards[flippedCards[0]];

      if (firstCard.label === card.label) {
        alert("Match");
      }
    }
  };

  const startGame = useCallback(() => {
    setCards(shuffle(baseDeck));
    setScore(0);
    setMoves(0);
  }, [baseDeck]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    startGame();
  }, [startGame]);

  return { cards, score, moves, startGame, handleCardClick };
}
