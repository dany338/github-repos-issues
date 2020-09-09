import {
  githubSearchIssuesListInit,
  githubSearchIssuesListSuccess,
  githubSearchIssuesListError
} from './actions';
import * as GithubServices from "../../services";

export const getSearchMoviesRequest = (query) => {
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
