import React, { useEffect, useState } from 'react';

import { useQuery } from '@apollo/client';
import { SEARCH_REPOS, SEARCH_USERS } from '../services/githubgraphql.services';
import UserGithub from './UserGithub';
import RepoGithub from './RepoGithub';

function GithubQueryRepos({ searchText, repoQuery, variables }) {
  useEffect(() => {
    console.log('cambios en search', searchText);
  }, [searchText]);

  const useQueryGraphQL = () => {
    return { loading, error, data };
  };
  const { loading, error, data } = useQuery(
    repoQuery ? SEARCH_REPOS : SEARCH_USERS,
    {
      variables: { queryString: `${variables}:${searchText.searchText}` },
    }
  );
  let repositories;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data && data.search) {
    repositories = data.search;
  }

  const functionRenderComp = () => {
    console.log('repositories', repositories);
    if (repoQuery) {
      return (
        <React.Fragment>
          <h1 className='text-lg font-bold'>
            {repositories.repositoryCount} repository results
          </h1>

          {repositories.nodes.map((itemGraphRepo) => (
            <RepoGithub repogit={itemGraphRepo} />
          ))}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1 className='text-lg font-bold'>{repositories.userCount} user</h1>
          {repositories.nodes.map(
            (itemGraphUser) =>
              itemGraphUser.name && <UserGithub usergit={itemGraphUser} />
          )}
        </React.Fragment>
      );
    }
  };

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
