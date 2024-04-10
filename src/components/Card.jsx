import coverImage from "../../public/cover-image.png";
import "../styles/index.css";

export function Card({ card, flipped, handleClick, isDisabled }) {
  function handleChoice() {
    if (!isDisabled) {
      handleClick(card);
    }
  }

  return (
    <div className={`card ${card.matched ? "highlighted" : ""}`}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front" />
        <img
          className="back"
          src={coverImage}
          onClick={handleChoice}
          alt="back"
        />
      </div>
    </div>
  );
}
