import { API_HOST_GITHUB } from '../config/const';
/* Defined Endpoints */
import endpoints from '../config/endpoints';

export const apiGithub = {
  searchIssues: async (query = '') => {
    try {
      const response = await fetch( `${API_HOST_GITHUB}${endpoints.github.issues}?q=repo:facebook/react+state:open+${query}&sort=created&order=desc`);
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  getComments: async (comments_url = '') => {
    try {
      const response = await fetch( `${comments_url}`);
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
};

export default apiGithub;
