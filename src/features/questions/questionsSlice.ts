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
			question: 'aroma',
			answer: 'masculine',
		},
		{
			id: 2,
			question: 'canadá',
			answer: 'masculine',
		},
		{
			id: 3,
			question: 'clima',
			answer: 'masculine',
		},
		{
			id: 4,
			question: 'cólera',
			answer: 'masculine',
		},
		{
			id: 5,
			question: 'cometa',
			answer: 'masculine',
		},
		{
			id: 6,
			question: 'cure',
			answer: 'feminine',
		},
		{
			id: 7,
			question: 'día',
			answer: 'masculine',
		},
		{
			id: 8,
			question: 'diagrama',
			answer: 'masculine',
		},
		{
			id: 9,
			question: 'dilema',
			answer: 'masculine',
		},
		{
			id: 10,
			question: 'disco',
			answer: 'feminine',
		},
		{
			id: 11,
			question: 'enigma',
			answer: 'masculine',
		},
		{
			id: 12,
			question: 'foto',
			answer: 'feminine',
		},
		{
			id: 13,
			question: 'guardabrisa',
			answer: 'masculine',
		},
		{
			id: 14,
			question: 'idioma',
			answer: 'masculine',
		},
		{
			id: 15,
			question: 'mano',
			answer: 'feminine',
		},
		{
			id: 16,
			question: 'moto',
			answer: 'feminine',
		},
		{
			id: 17,
			question: 'nao',
			answer: 'feminine',
		},
		{
			id: 18,
			question: 'radio',
			answer: 'feminine',
		},
		{
			id: 19,
			question: 'reo',
			answer: 'feminine',
		},
		{
			id: 20,
			question: 'tanga',
			answer: 'masculine',
		},
		{
			id: 21,
			question: 'olor',
			answer: 'masculine',
		},
		{
			id: 22,
			question: 'árbol',
			answer: 'masculine',
		},
		{
			id: 23,
			question: 'palabra',
			answer: 'feminine',
		},
		{
			id: 24,
			question: 'vida',
			answer: 'feminine',
		},
		{
			id: 25,
			question: 'casa',
			answer: 'feminine',
		},
		{
			id: 26,
			question: 'lado',
			answer: 'masculine',
		},
		{
			id: 27,
			question: 'trabajo',
			answer: 'masculine',
		},
		{
			id: 28,
			question: 'tipo',
			answer: 'masculine',
		},
		{
			id: 29,
			question: 'ejemplo',
			answer: 'masculine',
		},
		{
			id: 30,
			question: 'noche',
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
