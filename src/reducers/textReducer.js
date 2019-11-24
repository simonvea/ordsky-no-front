export const init = {
  loading: false,
  text: '',
  wordCount: undefined,
};

export function startCountAction(data) {
  return {
    type: 'TEXT_START_COUNT',
    data,
  };
}

export function finishCountAction(data) {
  return {
    type: 'TEXT_FINISH_COUNT',
    data,
  };
}

export function startCloudAction() {
  return {
    type: 'TEXT_START_CLOUD',
  };
}

export function finishCloudAction(data) {
  return {
    type: 'TEXT_FINISH_CLOUD',
    data,
  };
}

export function textErrorAction(error) {
  return {
    type: 'TEXT_ERROR',
    error,
  };
}

export function textRetryAction() {
  return {
    type: 'TEXT_RESTART',
  };
}

export default function textReducer(state = init, action) {
  switch (action.type) {
    case 'TEXT_ADD_TEXT':
      return { ...state, text: action.data };
    case 'TEXT_START_COUNT':
      return {
        ...state, loading: true, text: action.data, wordCount: undefined,
      };
    case 'TEXT_FINISH_COUNT': {
      const wordCount = action.data;
      const barChart = Object.keys(wordCount)
        .map((word) => ({ text: word, count: wordCount[word] }))
        .sort((a, b) => (a.count < b.count ? 1 : -1))
        .slice(0, 10);

      return {
        ...state, loading: false, wordCount, barChart,
      };
    }
    case 'TEXT_RESTART':
      return { ...state, wordCount: undefined, barChart: undefined };
    case 'TEXT_START_CLOUD':
      return { ...state, loading: true };
    case 'TEXT_FINISH_CLOUD':
      return { ...state, loading: false, cloud: action.data };
    case 'TEXT_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return { ...state };
  }
}
