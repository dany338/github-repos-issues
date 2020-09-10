import {
  GITHUB_SEARCH_ISSUES_LIST_INIT,
  GITHUB_SEARCH_ISSUES_LIST_SUCCESS,
  GITHUB_SEARCH_ISSUES_LIST_ERROR,
  GITHUB_COMMENTS_ISSUE_INIT,
  GITHUB_COMMENTS_ISSUE_SUCCESS,
  GITHUB_COMMENTS_ISSUE_ERROR
} from './types';

const initialState = {
  data: [],
  comments: [],
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
        data: payload.query !== '' ? payload.data : [],
        total_count: payload.query !== '' ? payload.total_count : 0,
        comments: [],
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

    case GITHUB_COMMENTS_ISSUE_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case GITHUB_COMMENTS_ISSUE_SUCCESS: {
      return {
        ...state,
        comments: payload.comments,
        isLoading: false,
        error: ''
      };
    }

    case GITHUB_COMMENTS_ISSUE_ERROR: {
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
