import * as React from 'react';
import { useEffect, useState } from 'react';

interface IMemoryGameProps {}

const MemoryGame: React.FC = () => {
  const [score, setScore] = useState(0);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [lockBoard, setLockBoard] = useState(false);

  const javaKeywords = [
    'abstract',
    'assert',
    'boolean',
    'break',
    'byte',
    'case',
    'catch',
    'char',
    'class',
  ];

  // Double the array to create matching pairs
  const gameKeywords = [...javaKeywords, ...javaKeywords];

  // Shuffle the gameKeywords array
  gameKeywords.sort(() => Math.random() - 0.5);

  const [cards, setCards] = useState(
    gameKeywords.map((keyword) => ({ keyword, flipped: false }))
  );

  useEffect(() => {
    // Display all text for 5000ms (adjust as needed)
    const timeout = setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) => ({ ...card, flipped: false }))
      );
    }, 5000);

    return () => clearTimeout(timeout);
  }, []); // Empty dependency array means this effect runs once after the initial render

  const flipCard = (index: number) => {
    if (lockBoard || cards[index].flipped) return;

    setCards((prevCards) =>
      prevCards.map((card, i) =>
        i === index ? { ...card, flipped: true } : card
      )
    );

    setFlippedCards((prevFlippedCards) => [...prevFlippedCards, cards[index].keyword]);

    if (flippedCards.length === 0) {
      setFlippedCards([cards[index].keyword]);
    } else {
      checkMatch();
    }
  };

  const checkMatch = () => {
    const [card1, card2] = flippedCards;
    const isMatch = card1 === card2;

    if (isMatch) {
      incrementScore(); // Increment score on match
      disableCards();
    } else {
      unflipCards();
    }
  };

  const incrementScore = () => {
    setScore((prevScore) => prevScore + 1);
    console.log('Score:', score);
    // You can update the UI to display the score if needed
  };

  const disableCards = () => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        flippedCards.includes(card.keyword) ? { ...card, flipped: true } : card
      )
    );
    setFlippedCards([]);
  };

  const unflipCards = () => {
    setLockBoard(true);
    setTimeout(() => {
      setCards((prevCards) =>
        prevCards.map((card) => ({ ...card, flipped: false }))
      );
      setFlippedCards([]);
      setLockBoard(false);
    }, 1000);
  };

  return (
    <div>
      <div className="score">
        Score: <span id="scoreValue">{score}</span>
      </div>
      <div className="memory-game">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${card.flipped ? 'flipped' : ''}`}
            onClick={() => flipCard(index)}
          >
            {card.flipped ? card.keyword : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
