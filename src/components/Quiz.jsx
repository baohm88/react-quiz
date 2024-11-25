import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import { FaHourglassStart } from "react-icons/fa";

import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [gameOn, setGameOn] = useState(false); 

    const activeQuestionIndex = userAnswers.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (!gameOn) {
        return (
            <div id="quiz">
                <h2>Welcome to the Quiz!</h2>
                <button onClick={() => setGameOn(true)} className="start-button">
                    Start Quiz <FaHourglassStart />
                </button>
            </div>
        );
    }

    if (activeQuestionIndex >= QUESTIONS.length) {
        return <Summary userAnswers={userAnswers} />;
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}
