
export function addCloud(data) {
  return {
    type: 'CLOUD_ADD_CLOUD',
    data,
  };
}

export function setWaiting(data) {
  return {
    type: 'CLOUD_SET_WAITING',
    data,
  };
}

const initialState = {
  waiting: false,
  cloud: [],
};


function cloudsReducer(state = initialState, action) {
  switch (action.type) {
    case 'CLOUD_ADD_CLOUD':
      return { ...state, cloud: action.data };
    case 'CLOUD_SET_WAITING':
      return { ...state, waiting: action.data };
    default:
      return state;
  }
}

export default cloudsReducer;
