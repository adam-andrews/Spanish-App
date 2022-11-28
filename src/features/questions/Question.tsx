import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

type QuestionType = {
	id: number;
	question: string;
	answer: 'masculine' | 'feminine';
};

function Question() {
	const { questions } = useSelector((state: RootState) => state.questions);
	const [lives, setLives] = useState(3);
	const [points, setPoints] = useState(0);
	const [questionNumber, setQuestionNumber] = useState(1);
	const [currentQuestion, setCurrentQuestion] = useState<QuestionType>();
	const shuffledQuestions = questions.slice().sort(() => Math.random() - 0.5);

	useEffect(() => {
		setCurrentQuestion(shuffledQuestions[questionNumber - 1]);
	}, []);
	function shuffleQuestions(array: QuestionType[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	function checkAnswer(answer: 'masculine' | 'feminine') {
		if (currentQuestion?.answer === answer) {
			setPoints(points + 1);
		} else {
			setLives(lives - 1);
		}

		if (lives === 1) {
			gameOver();
		}
		setQuestionNumber(questionNumber + 1);
		questions[questionNumber]
			? setCurrentQuestion(questions[questionNumber])
			: gameOver();
	}

	function gameOver() {
		alert('Game Over');
		setLives(3);
		setPoints(0);
	}

	//Loops for each life add a heart
	const hearts = '❤️'.repeat(lives) + '💔'.repeat(3 - lives);
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-blue-500  h-screen">
			<div className="mx-auto max-w-3xl bg-red-500 h-full flex flex-col items-center justify-center">
				{/* {Score will go here} */}
				<div className="text-9xl">{points}</div>
				{/* {Question will go here} */}
				<div className="text-9xl">{currentQuestion?.question}</div>
				{/* {Answer options will go here} */}
				<div className="flex gap-8 my-10 text-3xl">
					<button
						onClick={() => checkAnswer('masculine')}
						className="h-16 w-48 bg-blue-400 rounded-md"
					>
						👨‍💼
					</button>
					<button
						onClick={() => checkAnswer('feminine')}
						className="h-16 w-48 bg-blue-700 rounded-md"
					>
						👩
					</button>
				</div>
				{/* {Lives will go here} */}
				<div className="text-5xl">{hearts}</div>
			</div>
		</div>
	);
}

export default Question;
