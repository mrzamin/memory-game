import { useState, useEffect } from "react";
import { cardImages } from "../assets/cardImages.js";
import { Card } from "./Card.jsx";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cards, setCards] = useState([]);
  const [cardOne, setCardOne] = useState();
  const [cardTwo, setCardTwo] = useState();
  const [isDisabled, setIsDisabled] = useState(false);

  const [turns, setTurns] = useState(0);
  const [matches, setMatches] = useState(0);
  const [record, setRecord] = useState(0);

  //Initiate a new game on initial page render:

  useEffect(() => {
    resetGame();
  }, []);

  const handleClick = (card) => {
    cardOne ? setCardTwo(card) : setCardOne(card);
  };

  //Check card 1 and card 2 for a match:

  useEffect(() => {
    if (cardOne && cardTwo) {
      setIsDisabled(true);

      if (cardOne.id === cardTwo.id) {
        setMatches((prevCount) => prevCount + 1);

        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === cardOne.id) {
              return { ...card, matched: true };
            } else {
              return { ...card };
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 2000);
      }
    }
  }, [cardOne, cardTwo]);

  //Keep track of best score:

  useEffect(() => {
    if (matches === 6) {
      if (record === 0 || record > turns) {
        setRecord(turns);
        setMatches(0);
      }
    }
  }, [matches]);

  //Reset card choices:

  const resetCards = () => {
    setCardOne(null);
    setCardTwo(null);
  };

  //Start a new game:

  const resetGame = () => {
    const unshuffledCards = [...cardImages, ...cardImages];
    const shuffledCards = shuffleCards(unshuffledCards);
    const gameCards = shuffledCards.map((card) => ({
      ...card,
      key: uuidv4(),
      matched: false,
    }));

    resetCards();
    setCards(gameCards);
    setTurns(0);
  };

  //Use Fisher Yates shuffle algorithm to
  //randomize card order:

  function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Reset cards and increase turn:

  const resetTurn = () => {
    resetCards();
    setTurns((prevTurn) => prevTurn + 1);
    setIsDisabled(false);
  };

  return (
    <div className="wrapper">
      <header>
        <h1>Abstract Art Memory Game</h1>
      </header>

      <div className="app">
        <section className="game">
          <div className="card-grid">
            {cards.map((card) => (
              <Card
                key={card.key}
                card={card}
                flipped={card.matched || card === cardOne || card === cardTwo}
                handleClick={handleClick}
                isDisabled={isDisabled}
              ></Card>
            ))}
          </div>
        </section>

        <section className="game-stats">
          <div className="turns">Turns: {turns}</div>
          <div className="record">Record: {record}</div>
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
