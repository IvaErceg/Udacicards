import { REHYDRATE } from 'redux-persist/constants'

const initialState = [{ title: 'React', cards: 20, questions: [] }, { title: 'Redux', cards: 20, questions: [] }];
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DECK':
            return [action.payload, ...state];
        case 'REMOVE_DECK':
            return state.filter(el => el.title !== action.payload);
        case REHYDRATE:
            return [...state, action.payload.myReducer]
        default:
            return state;
    }
}