import React from 'react';

import { useQuery } from '@apollo/client';
import { SEARCH_REPOS, SEARCH_USERS } from '../services/githubgraphql.services';
import UserGithub from './UserGithub';
import RepoGithub from './RepoGithub';

function GithubQueryRepos({ searchText, repoQuery, variables }) {
  const { loading, error, data } = useQuery(
    repoQuery ? SEARCH_REPOS : SEARCH_USERS,
    {
      variables: { queryString: `${variables}:${searchText}` },
    }
  );
  let repositories;

  if (data && data.search) {
    repositories = data.search;
  }

  const functionRenderComp = () => {
    if (repoQuery) {
      return (
        <React.Fragment>
          <h1 className='text-lg font-bold'>
            {repositories.repositoryCount} repository results
          </h1>

          {repositories.nodes.map((itemGraphRepo, index) => (
            <RepoGithub repogit={itemGraphRepo} id={index} />
          ))}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1 className='text-lg font-bold'>{repositories.userCount} user</h1>
          {repositories.nodes.map(
            (itemGraphUser, index) =>
              itemGraphUser.name && (
                <UserGithub usergit={itemGraphUser} key={index} />
              )
          )}
        </React.Fragment>
      );
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div className='flex flex-col bg-white my-5 border p-5 w-96'>
        <label> Error :( </label>
      </div>
    );

  return (
    <React.Fragment>
      {repositories.nodes.length > 0 ? (
        functionRenderComp()
      ) : (
        <div>There aren't result</div>
      )}
    </React.Fragment>
  );
}

export default GithubQueryRepos;
