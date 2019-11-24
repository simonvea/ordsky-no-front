const init = {
  loading: false,
  text: '',
  wordCount: undefined,
};

export function startCountAction(data) {
  return {
    type: 'WORDS_START_COUNT',
    data,
  };
}

export function finishCountAction(data) {
  return {
    type: 'WORDS_FINISH_COUNT',
    data,
  };
}

export function startCloudAction() {
  return {
    type: 'WORDS_START_CLOUD',
  };
}

export function finishCloudAction(data) {
  return {
    type: 'WORDS_FINISH_CLOUD',
    data,
  };
}

export function textErrorAction(error) {
  return {
    type: 'WORDS_ERROR',
    error,
  };
}

export function textRetryAction() {
  return {
    type: 'WORDS_RESTART',
  };
}

export default function wordsReducer(state = init, action) {
  switch (action.type) {
    case 'WORDS_ADD_TEXT':
      return { ...state, text: action.data };
    case 'WORDS_START_COUNT':
      return {
        ...state, loading: true, text: action.data, wordCount: undefined,
      };
    case 'WORDS_FINISH_COUNT': {
      const wordCount = action.data;
      return {
        ...state, loading: false, wordCount,
      };
    }
    case 'WORDS_RESTART':
      return { ...state, wordCount: undefined, barChart: undefined };
    case 'WORDS_START_CLOUD':
      return { ...state, loading: true };
    case 'WORDS_FINISH_CLOUD':
      return { ...state, loading: false, cloud: action.data };
    case 'WORDS_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
}
