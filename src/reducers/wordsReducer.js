

export function addWords(data) {
  return {
    type: 'ADD_WORDS',
    data,
  };
}

function wordsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_WORDS':
      return [...state, action.data];
    default:
      return state;
  }
}

export default wordsReducer;
