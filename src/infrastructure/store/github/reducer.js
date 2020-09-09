import {
  GITHUB_SEARCH_ISSUES_LIST_INIT,
  GITHUB_SEARCH_ISSUES_LIST_SUCCESS,
  GITHUB_SEARCH_ISSUES_LIST_ERROR
} from './types';

const initialState = {
  data: [],
  total_count: 0,
  query: '',
  issueSelected: null,
  isLoading: false,
  error: null,
};

const github = (state = initialState, { type, payload }) => {
  switch (type) {
    case GITHUB_SEARCH_ISSUES_LIST_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case GITHUB_SEARCH_ISSUES_LIST_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        total_count: payload.total_count,
        query: payload.query,
        isLoading: false,
        error: ''
      };
    }

    case GITHUB_SEARCH_ISSUES_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export { github as default, initialState };
