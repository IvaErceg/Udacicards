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

export function removeDeck(id) {
    return { 
        type: 'REMOVE_DECK',
        payload: id
     
     }
 };

 export function addCard(id, question) {
    return { 
        type: 'ADD_CARD',
        id: id,
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

