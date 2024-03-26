/**
 * To get all stargazed repositories of a user
 *
 * @param username string Your username
 * @returns {`/api/pinnedGithubRepository?username=${string}`}
 */
export const getListOfUrlRepositoriesUrl = (username) => {
  return `/api/pinnedGithubRepository?username=${username}`;
};
