import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/firebase/firebase";
import { toast } from 'react-toastify';

import Topbar from '@/components/Topbar/Topbar';
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

const IntroductionLevel = () => {
  const [user, loading] = useAuthState(auth);
  const [currentLevel, setCurrentLevel] = useState(1);

  useEffect(() => {
    const storedLevel = localStorage.getItem('currentLevel');
    if (storedLevel) {
      setCurrentLevel(parseInt(storedLevel, 10));
    }
  }, []);

  const handleLevelComplete = () => {
    const nextLevel = currentLevel + 1;

    localStorage.setItem('currentLevel', String(nextLevel));

    setCurrentLevel(nextLevel);
  };

  const handlePreviousLevel = () => {
    const previousLevel = Math.max(1, currentLevel - 1);

    localStorage.setItem('currentLevel', String(previousLevel));

    setCurrentLevel(previousLevel);
  };

  const renderLevelComponent = () => {
    if (loading) {
      return <div>Loading...</div>; // You can replace this with a loading indicator
    }

    switch (currentLevel) {
      case 1:
        return <Level1 onComplete={handleLevelComplete} />;
      case 2:
        return <Level2 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />;
      case 3:
        return <Level3 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />;
      case 4:
        return <Level4 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />;
      case 5:
        return <Level5 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />;
      case 6:
        return <Level6 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />;
      case 7:
        return <Level7 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />;
      case 8:
        return <Level8 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />;
      case 9:
        return <Level9 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />;
      case 10:
        return <Level10 onPrevious={handlePreviousLevel} onComplete={handleLevelComplete} />;
      case 11:
        return <Level11 onPrevious={handlePreviousLevel} />;
      default:
        return null;
    }
  };

 
  return (
    <DndProvider backend={HTML5Backend}>
      <div className=' bg-dark-layer-2 min-h-screen'>
        <Topbar />
        { user ? (
        <div>
          <h1 className=' text-2xl md:text-4xl font-bold mb-4 md:ml-[550px] text-white mt-7'>
            Introduction to Java Programming
          </h1>
          {/* Render components based on the current level */}
          {renderLevelComponent()}
        </div>
        ) : (
          
          <div className='bg-dark-layer-2 min-h-screen flex items-center justify-center text-white'>
            
          <p>Please login to access the introduction levels.</p>
        </div>
        )}
      </div>
    </DndProvider>
  );
};

export default IntroductionLevel;
