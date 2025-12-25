import { useCallback, useEffect, useMemo, useState } from "react";

export type CardValue = {
  id: string;
  matchKey: string;
  imgSrc: string;
  label: string;
};

const imageFiles = [
  "drawing.png",
  "helmet.png",
  "shoes.png",
  "stones.png",
  "tea.png",
  "tree.png",
  "writing.png",
  "yelpaze.png",
] as const;

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
      { id: `${label}-a`, matchKey: label, imgSrc, label },
      { id: `${label}-b`, matchKey: label, imgSrc, label },
    ];
  });

export function useGame() {
  const baseDeck = useMemo(() => buildDeck(), []);
  const [cards, setCards] = useState<CardValue[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const startGame = useCallback(() => {
    setCards(shuffle(baseDeck));
    setScore(0);
    setMoves(0);
  }, [baseDeck]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    startGame();
  }, [startGame]);

  return { cards, score, moves, startGame };
}
