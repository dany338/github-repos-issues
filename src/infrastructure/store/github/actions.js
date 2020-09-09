import {
  GITHUB_SEARCH_ISSUES_LIST_INIT,
  GITHUB_SEARCH_ISSUES_LIST_SUCCESS,
  GITHUB_SEARCH_ISSUES_LIST_ERROR
} from './types';

export const githubSearchIssuesListInit = () => ({ type: GITHUB_SEARCH_ISSUES_LIST_INIT });
export const githubSearchIssuesListSuccess = (data, total_count, query) => ({ type: GITHUB_SEARCH_ISSUES_LIST_SUCCESS, payload: { data, total_count, query } });
export const githubSearchIssuesListError = error => ({ type: GITHUB_SEARCH_ISSUES_LIST_ERROR, payload: error });
