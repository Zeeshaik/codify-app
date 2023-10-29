import * as React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import quizPrblm from "../../mockproblems/quiz";


interface IQuizComponentProps {
  currentQuestion: number;
}

const QuizComponent: React.FunctionComponent<IQuizComponentProps> = ({ currentQuestion }) => {
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const correctAnswerIndex = quizPrblm[currentQuestion].answer;
      const isCorrect = correctAnswerIndex === selectedOption+1;

      setIsCorrect(isCorrect);

      if (isCorrect) {
        toast.success('Congratulations! Correct Answer!');
      } else {
        toast.error('Wrong Answer. Go to Previous and Read!');
      }
    }

    setSubmitted(true);
  };

  return (
    <div>
      <div className="container1 text-white">
        <div className="question">
          <h1>{quizPrblm[currentQuestion].question}</h1>
        </div>
        <div className="option-container">
          {quizPrblm[currentQuestion].options.map((option, index) => (
            <button
            key={index}
            className={`option-btn${submitted && index === selectedOption ? ' selected' : ''}${submitted && index === selectedOption && isCorrect ? ' correct' : ''}${submitted && index === selectedOption && !isCorrect ? ' incorrect' : ''}`}
            onClick={() => handleOptionClick(index)}
            disabled={submitted}
          >
              {option}
            </button>
          ))}
        </div>
        <input type="button" value="Submit" onClick={handleNextQuestion} id="next-button" />
      </div>
    </div>
  );
};

export default QuizComponent;
