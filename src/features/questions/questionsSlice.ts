import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Question = {
	id: number;
	question: string;
	answer: 'masculine' | 'feminine';
};

export interface QuestionState {
	questions: Question[];
}

const initialState: QuestionState = {
	questions: [
		{
			id: 1,
			question: 'Vamos',
			answer: 'masculine',
		},
		{
			id: 2,
			question: 'madre',
			answer: 'feminine',
		},
	],
};

export const questionsSlice = createSlice({
	name: 'question',
	initialState,
	reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = questionsSlice.actions;

export default questionsSlice.reducer;
