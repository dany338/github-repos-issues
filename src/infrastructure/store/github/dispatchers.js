import {
  githubSearchIssuesListInit,
  githubSearchIssuesListSuccess,
  githubSearchIssuesListError,
  githubCommentsIssueInit,
  githubCommentsIssueSuccess,
  githubCommentsIssueError
} from './actions';
import * as GithubServices from "../../services";

export const githubSearchIssuesRequest = query => {
  return async dispatch => {
    dispatch(githubSearchIssuesListInit());
    try {
      const data = await GithubServices.apiGithub.searchIssues(query);
      if(typeof data === 'object' && Array.isArray(data.items)) {
        dispatch(githubSearchIssuesListSuccess(data.items, data.total_count, query));
        return { msg: `issues found: ${data.total_count}`, err: false, results: data.items };
      }
      dispatch(githubSearchIssuesListError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true, results: [] };
    } catch (error) {
      console.error(error);
      dispatch(githubSearchIssuesListError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true, results: [] };
    }
  };
};

export const githubCommentsIssueRequest = comments_url => {
  return async dispatch => {
    dispatch(githubCommentsIssueInit());
    try {
      if(comments_url === '') {
        dispatch(githubCommentsIssueSuccess([]));
        return { msg: `issues found: 0`, err: false, results: [] };
      }
      const comments = await GithubServices.apiGithub.getComments(comments_url);
      if(Array.isArray(comments)) {
        dispatch(githubCommentsIssueSuccess(comments));
        return { msg: `issues found: ${comments.length}`, err: false, results: comments };
      }
      dispatch(githubCommentsIssueError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true, results: [] };
    } catch (error) {
      console.error(error);
      dispatch(githubCommentsIssueError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true, results: [] };
    }
  };
};
