import { useGlobalStore } from '../../store';
import bindActions from '../../store/bindActions';
import githubReducer from '../../store/github';

const { dispatchers } = githubReducer;

const useGithub = () => {
  const { state, dispatch } = useGlobalStore();

  // List of Props
  const { github } = state;

  // List of Dispatchers
	const {
    githubSearchIssuesRequest,
    githubCommentsIssueRequest
  } = dispatchers;

  // Bind Actions
	const githubActions = bindActions({
    githubSearchIssuesRequest,
    githubCommentsIssueRequest
  }, dispatch);

  return { ...github, ...githubActions };
};

export default useGithub;
