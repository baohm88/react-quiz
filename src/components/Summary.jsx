import QuizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import { calculateAnswerStats } from "../utils";

export default function Summary({ userAnswers }) {
    const { skipped, correct, wrong } = calculateAnswerStats(userAnswers);

    return (
        <div id="summary">
            <img src={QuizCompleteImg} alt="Trophy Icon" />
            <h2>Quiz Complete!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skipped}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correct}%</span>
                    <span className="text">answered correctly</span>
                </p>
                <p>
                    <span className="number">{wrong}%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClasses = "user-answer";

                    if (answer === null) {
                        cssClasses += " skipped";
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClasses += " correct";
                    } else {
                        cssClasses += " wrong";
                    }

                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text} </p>
                            <p className={cssClasses}> {answer ?? "Skipped"}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
