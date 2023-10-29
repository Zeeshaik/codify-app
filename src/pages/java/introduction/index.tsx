import Level1 from '@/components/GameLevels/JavaLevels/IntroductionLevels/Level1';
import Level10 from '@/components/GameLevels/JavaLevels/IntroductionLevels/Level10';
import Level11 from '@/components/GameLevels/JavaLevels/IntroductionLevels/Level11';
import Level2 from '@/components/GameLevels/JavaLevels/IntroductionLevels/Level2';
import Level3 from '@/components/GameLevels/JavaLevels/IntroductionLevels/Level3';
import Level4 from '@/components/GameLevels/JavaLevels/IntroductionLevels/Level4';
import Level5 from '@/components/GameLevels/JavaLevels/IntroductionLevels/Level5';
import Level6 from '@/components/GameLevels/JavaLevels/IntroductionLevels/Level6';
import Level7 from '@/components/GameLevels/JavaLevels/IntroductionLevels/Level7';
import Level8 from '@/components/GameLevels/JavaLevels/IntroductionLevels/Level8';
import Level9 from '@/components/GameLevels/JavaLevels/IntroductionLevels/Level9';
import Topbar from '@/components/Topbar/Topbar';
import React, { useEffect, useState } from 'react';


const IntroductionLevel = () => {
  
  const [currentLevel, setCurrentLevel] = useState(1);
  useEffect(() => {
    const storedLevel = localStorage.getItem('1');
    if (storedLevel) {
      setCurrentLevel(parseInt(storedLevel, 10));
    }
  }, []);

  const handleLevelComplete = () => {
    const nextLevel = currentLevel + 1;

    // Save the next level to localStorage
    localStorage.setItem('currentLevel', String(nextLevel));

    setCurrentLevel(nextLevel);
  };

  const handlePreviousLevel = () => {
    const previousLevel = Math.max(1, currentLevel - 1);

    localStorage.setItem('currentLevel', String(previousLevel));

    setCurrentLevel(previousLevel);
  };
  return (
    <div className=' bg-dark-layer-2 min-h-screen'>
      <Topbar />
      <div>
        <h1 className='text-4xl font-bold mb-4 md:ml-[550px] text-white mt-7'>Introduction to Java Programming</h1>
        {/* Render components based on the current level */}
        {currentLevel === 1 && <Level1 onComplete={handleLevelComplete} />}
        {currentLevel === 2 && <Level2 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />}
        {currentLevel === 3 && <Level3 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />}
        {currentLevel === 4 && <Level4 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />}
        {currentLevel === 5 && <Level5 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />}
        {currentLevel === 6 && <Level6 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />}
        {currentLevel === 7 && <Level7 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />}
        {currentLevel === 8 && <Level8 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />}
        {currentLevel === 9 && <Level9 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />}
        {currentLevel === 10 && <Level10 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />}
        {currentLevel === 11 && <Level11 onPrevious={handlePreviousLevel}  />}
        {/* Add more levels as needed */}
      </div>
    </div>
  );
};

export default IntroductionLevel;