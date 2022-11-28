import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Question = {
	id: number;
	question: string;
	answer: 'masculine' | 'feminine';
};

// el aroma: aroma
// el Canadá: Canada
// el clima: climate
// el cólera: cholera (but la cólera, anger)
// el cometa: comet (but la cometa, kite)
// el cura: male priest (but la cura, cure or female priest)
// el día: day
// el diagrama: diagram
// el dilema: dilemma
// el diploma: diploma
// la disco: disco (short for la discoteca)
// el drama: drama
// el enigma: enigma
// el esquema: outline, diagram
// la foto: photo (short for la fotografía)
// el guardia: policeman or male guard (but la guardia, vigilance, policewoman or female guard)
// el guardabrisa: windshield
// el guardarropa: clothing closet
// el guía: male guide (but la guía, guidebook or female guide)
// el idioma: language
// el idiota: male idiot (but la idiota, female idiot)
// el indígena: indigenous male (but la indígena, indigenous female)
// la mano: hand
// el mañana: near future (but la mañana, tomorrow or morning)
// el mapa: map
// la modelo: female model (but el modelo, male model or various types on inanimate models)
// el morfema: morpheme
// la moto: motorcycle (short for la motocicleta)
// la nao: ship
// el panorama: panorama, outlook
// el papa: pope (but la papa, potato)
// el planeta: planet
// el plasma: plasma
// el poema: poem
// el policía: policeman (but la policía, police force or policewoman)
// el problema: problem
// el programa: program
// el quechua: Quechua language
// la radio: radio (short for la radiodifusión; but el radio, radius or radium; usage of the feminine form depends on the region)
// la reo: female criminal (but el reo, male criminal)
// el reuma, el reúma: rheumatism
// el síntoma: symptom, sign
// el sistema:system
// el sofá: sofa
// la soprano: female soprano (but el soprano, male soprano)
// el tanga: G-string
// el telegrama: telegram
// el tema: theme, subject
// el teorema: theorem
// el tequila: tequila (short for el licor de Tequila)
// la testigo: female witness (but el testigo, male witness)
// el tranvía: streetcar
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
			question: 'Canadá',
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
