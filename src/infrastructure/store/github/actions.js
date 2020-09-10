import {
  GITHUB_SEARCH_ISSUES_LIST_INIT,
  GITHUB_SEARCH_ISSUES_LIST_SUCCESS,
  GITHUB_SEARCH_ISSUES_LIST_ERROR,
  GITHUB_COMMENTS_ISSUE_INIT,
  GITHUB_COMMENTS_ISSUE_SUCCESS,
  GITHUB_COMMENTS_ISSUE_ERROR
} from './types';

export const githubSearchIssuesListInit = () => ({ type: GITHUB_SEARCH_ISSUES_LIST_INIT });
export const githubSearchIssuesListSuccess = (data, total_count, query) => ({ type: GITHUB_SEARCH_ISSUES_LIST_SUCCESS, payload: { data, total_count, query } });
export const githubSearchIssuesListError = error => ({ type: GITHUB_SEARCH_ISSUES_LIST_ERROR, payload: error });
export const githubCommentsIssueInit = () => ({ type: GITHUB_COMMENTS_ISSUE_INIT });
export const githubCommentsIssueSuccess = comments => ({ type: GITHUB_COMMENTS_ISSUE_SUCCESS, payload: { comments } });
export const githubCommentsIssueError = error => ({ type: GITHUB_COMMENTS_ISSUE_ERROR, payload: error });
