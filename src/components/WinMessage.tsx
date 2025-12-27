export default function WinMessage({ moves }: { moves: number }) {
  return (
    <div className="win-message">
      <div>Congratualtions!</div>
      <p>You completed the game in {moves} moves!</p>
    </div>
  );
}
