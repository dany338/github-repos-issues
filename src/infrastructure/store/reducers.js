/* eslint-disable import/no-cycle */
import githubReducer from "./github";

import { logger } from "./middlewares";

export const initialState = {
  github: githubReducer.initialState
};

export default function mainReducer(state, action) {
  // Receiving previous state here
  const {
    github
  } = state;

  // Receiving current state here
  const currentState = {
    github: githubReducer.reducer(github, action),
  };

  // Middlewares
  logger(action, state, currentState);

  return currentState;
}
