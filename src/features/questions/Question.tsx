import React from 'react';
import { useState } from 'react';
function Question() {
	const [lives, setLives] = useState(3);
	const [points, setPoints] = useState(0);

	function loseLive() {
		if (lives <= 0) {
			gameOver();
			return;
		}
		setLives(lives - 1);
	}
	function gainPoint() {
		setPoints(points + 1);
	}

	function gameOver() {
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
				<div className="text-9xl">Vamos</div>
				{/* {Answer options will go here} */}
				<div className="flex gap-8 my-10 text-3xl">
					<button
						onClick={loseLive}
						className="h-16 w-48 bg-blue-400 rounded-md"
					>
						👨‍💼
					</button>
					<button
						onClick={gainPoint}
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
