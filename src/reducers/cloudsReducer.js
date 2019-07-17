
export function addCloud(data) {
  return {
    type: 'ADD_CLOUD',
    data,
  };
}

function cloudsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CLOUD':
      return [...state, action.data];
    default:
      return state;
  }
}

export default cloudsReducer;
