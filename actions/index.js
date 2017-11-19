import uuid from 'uuid';
export  function getDecks() {
    return {
        type: 'GET_DECKS',
}
};

export function addDeck(title) {
   return { 
       type: 'ADD_DECK',
       payload: {title: title, id: uuid(), cards: 0, questions: []}
    
    }
};

export function removeDeck(title) {
    return { 
        type: 'REMOVE_DECK',
        payload: title
     
     }
 };

 export function addCard(title, question) {
    return { 
        type: 'ADD_CARD',
        title: title,
        payload: question
     
     }
 };

 export function removeCard(title, question) {
    return { 
        type: 'ADD_CARD',
        title: title,
        payload: question
     
     }
 };

