import { useState, useEffect } from "react";

export type CardType = {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
};

export const useGame = (cardValues: CardType[]) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const shuffleArray = (array: CardType[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  const initializeGame = () => {
    // shuffle the cards
    const shuffled = shuffleArray(cardValues);

    const finalCards = shuffled.map((card, index) => ({
      id: index,
      // value: `assets/${card.value}`, // Extract the string value from the card
      value: card.value,
      isFlipped: false,
      isMatched: false,
    }));

    setCards(finalCards);
    setMoves(0);
    setScore(0);
    setMatchedCards([]);
    setFlippedCards([]);
    setIsLocked(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    initializeGame();
  }, []);

  const handleCardClick = (card: CardType) => {
    // dont allow clicking if already flipped, or matched
    if (
      card.isFlipped ||
      card.isMatched ||
      isLocked ||
      flippedCards.length === 2
    ) {
      return;
    }
    // update card flipped state
    const newCards = cards.map((c) => {
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
      setIsLocked(true);
      const firstCard = cards[flippedCards[0]];
      if (firstCard.value === card.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setScore((prev) => prev + 1);

          setCards((prev) =>
            prev.map((c) => {
              if (c.id === card.id || c.id === firstCard.id) {
                return { ...c, isMatched: true };
              } else {
                return c;
              }
            })
          );
          setFlippedCards([]);
          setIsLocked(false);
        });
      } else {
        // flip back card 1, card 2
        setTimeout(() => {
          const flippedBackCard = newCards.map((c) => {
            if (newFlippedCards.includes(c.id) || c.id === card.id) {
              return { ...c, isFlipped: false };
            } else {
              return c;
            }
          });
          setCards(flippedBackCard);

          setFlippedCards([]);
          setIsLocked(false);
        }, 500);
      }

      setMoves((prev) => prev + 1);
    }
  };
  const isGameComplete = matchedCards.length === cardValues.length;

  return {
    cards,
    score,
    moves,
    isGameComplete,
    cardValues,
    initializeGame,
    handleCardClick,
  };
};

// import { useCallback, useEffect, useMemo, useState } from "react";

// export type CardValue = {
//   id: number;
//   isMatched: boolean;
//   isFlipped: boolean;
//   imgSrc: string;
//   label: string;
// };

// const cardValues: string[] = [
//   "drawing.png",
//   "helmet.png",
//   "shoes.png",
//   "stones.png",
//   "tea.png",
//   "tree.png",
//   "writing.png",
//   "yelpaze.png",
//   "drawing.png",
//   "helmet.png",
//   "shoes.png",
//   "stones.png",
//   "tea.png",
//   "tree.png",
//   "writing.png",
//   "yelpaze.png",
// ];

// const shuffle = <T>(arr: T[]) => {
//   const copy = [...arr];
//   for (let i = copy.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [copy[i], copy[j]] = [copy[j], copy[i]];
//   }
//   return copy;
// };

// const buildDeck = (): CardValue[] =>
//   imageFiles.flatMap((file) => {
//     const label = file.replace(".png", "");
//     const imgSrc = `/assets/${file}`;
//     return [
//       { id: `${label}-a`, isMatched: false, isFlipped: false, imgSrc, label },
//       { id: `${label}-b`, isMatched: false, isFlipped: false, imgSrc, label },
//     ];
//   });

// export function useGame() {
//   const baseDeck = useMemo(() => buildDeck(), []);
//   const [cards, setCards] = useState<CardValue[]>([]);
//   const [flippedCards, setFlippedCards] = useState([]);
//   const [score, setScore] = useState(0);
//   const [moves, setMoves] = useState(0);

//   const handleCardClick = (card: CardValue) => {
//     // dont allow clicking if card is already flipped or matched
//     if (card.isFlipped || card.isMatched) {
//       return;
//     }
//     // update card flipped state
//     const newCards = cards.map((c: CardValue) => {
//       if (c.id === card.id) {
//         return { ...c, isFlipped: true };
//       } else {
//         return c;
//       }
//     });
//     setCards(newCards);

//     const newFlippedCards = [...flippedCards, card.id];
//     setFlippedCards(newFlippedCards);

//     // check for match if two cards are flipped
//     if (flippedCards.length === 1) {
//       const firstCard = cards[flippedCards[0]];

//       if (firstCard.label === card.label) {
//         alert("Match");
//       }
//     }
//   };

//   const startGame = useCallback(() => {
//     setCards(shuffle(baseDeck));
//     setScore(0);
//     setMoves(0);
//   }, [baseDeck]);

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     startGame();
//   }, [startGame]);

//   return { cards, score, moves, startGame, handleCardClick };
// }
