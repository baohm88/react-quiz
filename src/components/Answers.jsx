import { useRef } from "react";
import { shuffleArray } from "../utils";

export default function Answers({
    answers,
    selectedAnswer,
    answerState,
    onSelect,
}) {
    const shuffledAnswers = useRef(shuffleArray([...answers]));

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClasses = "";

                if (answerState === "answered" && isSelected) {
                    cssClasses = "selected";
                }

                if (
                    (answerState === "correct" || answerState === "wrong") &&
                    isSelected
                ) {
                    cssClasses = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button
                            onClick={() => onSelect(answer)}
                            className={cssClasses}
                            disabled={answerState !== ""}
                            aria-label={`Select answer: ${answer}`}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
