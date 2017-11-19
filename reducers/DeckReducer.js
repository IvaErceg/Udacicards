import { REHYDRATE } from 'redux-persist/constants'

const initialState = [{ title: 'React', cards: 0, questions: [], id: 1 }, { title: 'Redux', cards: 0, questions: [], id: 2 }];
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DECK':
            return [action.payload, ...state];
        case 'REMOVE_DECK':
            return state.filter(el => el.title !== action.payload);
        case 'ADD_CARD':
            const filtered = state.filter(el => el.title === action.title)[0];
            filtered.questions = [...filtered.questions, action.payload];
            filtered.cards = filtered.questions.length;
            const place = state.indexOf(filtered);
            return [...state.slice(0, place), filtered, ...state.slice(place + 1)]
        case 'REMOVE_CARD':
            const filteredQuestions = filtered.questions.filter(q => q.question !== action.payload);
            filtered.questions = filteredQuestions;
            return [...state.slice(0, place), filtered, ...state.slice(place + 1)]
        default:
            return state;
    }
}