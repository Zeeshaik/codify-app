// JavaGame.tsx
import React, { useState } from 'react';
import Level1 from '../Levels/Level1';
import Level2 from '../Levels/Level2';
import Level3 from '../Levels/Level3';
import Level4 from '../Levels/Level4';
import Level5 from '../Levels/Level5';


interface JavaGameProps {
  levels: number;
}

const JavaGame: React.FC<JavaGameProps> = ({ levels }) => {
  const [currentLevel, setCurrentLevel] = useState(1);

  const handleLevelComplete = () => {
    if (currentLevel < levels) {
      setCurrentLevel(currentLevel + 1);
    } else {
      alert('Congratulations! You completed all levels.');
    }
  };

  // Function to render the current level component
  const renderCurrentLevel = () => {
    switch (currentLevel) {
      case 1:
        
        return <Level1 onComplete={handleLevelComplete} />;
      case 2:
        return <Level2 onComplete={handleLevelComplete} />;
      case 3:
        return <Level3 onComplete={handleLevelComplete} />;
      case 4:
        return <Level4 onComplete={handleLevelComplete} />;
      case 5:
        return <Level5 onComplete={handleLevelComplete} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderCurrentLevel()}
    </div>
  );
};

export default JavaGame;
