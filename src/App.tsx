import GameHeader from "./components/GameHeader";

type CardValue = {
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
];

// Build a pair for each image so you can shuffle and flip later.
const cardValues: CardValue[] = imageFiles.flatMap((file) => {
  const label = file.replace(".png", "");
  const imgSrc = `/assets/${file}`; // files in public/ are served from the root
  return [
    { id: `${label}-a`, matchKey: label, imgSrc, label },
    { id: `${label}-b`, matchKey: label, imgSrc, label },
  ];
});

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
      <GameHeader score={10} moves={10} />

      <div className="grid grid-cols-4 gap-4 mt-6 mx-2">
        {cardValues.map((card) => (
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
    </div>
  );
}

export default App;
