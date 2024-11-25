import QUESTIONS from "./questions";

export function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

export function calculateAnswerStats(userAnswers) {
    const total = userAnswers.length;
    const skipped = userAnswers.filter((answer) => answer === null).length;
    const correct = userAnswers.filter(
        (answer, index) => answer === QUESTIONS[index].answers[0]
    ).length;

    return {
        skipped: Math.round((skipped / total) * 100),
        correct: Math.round((correct / total) * 100),
        wrong: Math.round(100 - ((skipped + correct) / total) * 100),
    };
}
