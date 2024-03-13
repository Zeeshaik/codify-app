import React, { useState, useEffect } from 'react';

interface CodeSequence {
  id: number;
  code: string;
  completed: boolean;
}

const CodeSequencerChallenge: React.FC = () => {
  const initialCodeSequences: CodeSequence[] = [
    { id: 1, code: 'System.out.println("Name :");', completed: false },
    { id: 2, code: 'System.out.println("Surname :");', completed: false }
    // Add more code sequences here for increased complexity
  ];

  const [codeSequences, setCodeSequences] = useState<CodeSequence[]>(initialCodeSequences);
  const [timer, setTimer] = useState<number>(60); // Timer duration in seconds
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    // Cleanup timer interval on component unmount
    return () => clearInterval(countdown);
  }, []);

  const handleCodeSequenceCompletion = (id: number) => {
    const updatedCodeSequences = codeSequences.map(sequence =>
      sequence.id === id ? { ...sequence, completed: true } : sequence
    );
    setCodeSequences(updatedCodeSequences);
    setScore(score + 1); // Increase score when a code sequence is completed
  };

  const renderCodeSequences = () => {
    return codeSequences.map(sequence => (
      <div key={sequence.id} className={`mb-4 ${sequence.completed ? 'text-green-500' : 'text-black'}`}>
        <p>{sequence.code}</p>
        {!sequence.completed && (
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md mt-2" onClick={() => handleCodeSequenceCompletion(sequence.id)}>Complete</button>
        )}
      </div>
    ));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Code Sequencer Challenge</h2>
      <p className="text-base mb-4">Rearrange and complete the code sequences to produce the desired output:</p>
      <div className="code-sequences">
        {renderCodeSequences()}
      </div>
      <div className="timer">
        <p className="text-base">Time Remaining: {timer} seconds</p>
      </div>
      <div className="score">
        <p className="text-base">Score: {score}</p>
      </div>
    </div>
  );
};

export default CodeSequencerChallenge;
