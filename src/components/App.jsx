import { useState, useEffect } from "react";
import { cardImages } from "./cardImages.js";
import { Card } from "./Card.jsx";

import background from "../../public/background.png";

function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const [turns, setTurns] = useState(0);
  const [record, setRecord] = useState(0);

  const handleClick = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        console.log("matched");

        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //Reset game:
  const resetGame = () => {
    const unshuffledCards = [...cardImages, ...cardImages];
    const shuffledCards = shuffleCards(unshuffledCards);
    const gameCards = shuffledCards.map((card) => ({
      ...card,
      id: Math.random(),
      matched: false,
    }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(gameCards);
    setTurns(0);
  };

  //Use Fisher Yates shuffle algorithm to randomize card order:
  function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // reset choices and increase turn.
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  //start a new game on initial page render.

  useEffect(() => {
    resetGame();
  }, []);
  //Component:

  return (
    <div>
      <header>Abstract Art Memory Game</header>

      <div className="app">
        <section className="game">
          <div className="card-grid">
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                handleClick={handleClick}
                isDisabled={disabled}
              ></Card>
            ))}
            ;
          </div>
        </section>

        <section className="game-stats">
          <div className="turns">Turns</div>
          <div className="record">Record</div>
          <button onClick={resetGame}>New Game</button>
        </section>
      </div>
      <footer>
        <div>© 2024 mrzamin</div>
        <div>
          Art from <a href="https://www.adobe.com/express/">Adobe Express</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
