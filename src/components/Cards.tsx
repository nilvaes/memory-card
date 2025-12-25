import { useEffect, useState } from "react";

type CardValue = {
  id: string;
  matchKey: string;
  imgSrc: string;
  label: string;
};
export default function Cards() {
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

  const shuffle = <T,>(arr: T[]) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const cardValues: CardValue[] = imageFiles.flatMap((file) => {
    const label = file.replace(".png", "");
    const imgSrc = `/assets/${file}`;
    return [
      { id: `${label}-a`, matchKey: label, imgSrc, label },
      { id: `${label}-b`, matchKey: label, imgSrc, label },
    ];
  });
  const [cards, setCards] = useState<CardValue[]>([]);
  const startGame = () => setCards(shuffle(cardValues));

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    startGame();
  }, []);

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
