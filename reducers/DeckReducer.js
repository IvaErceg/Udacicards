import { REHYDRATE } from 'redux-persist/constants';
import { GET_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD } from '../actions/index';

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_DECK':
            return [action.payload, ...state];
        case 'REMOVE_DECK':
            return state.filter(el => el.id !== action.payload);
        case 'ADD_CARD':
            const filtered = state.filter(el => el.id === action.id)[0];
            filtered.questions = [...filtered.questions, action.payload];
            filtered.cards = filtered.questions.length;
            const place = state.indexOf(filtered);
            return [...state.slice(0, place), filtered, ...state.slice(place + 1)]
        default:
            return state;
    }
}