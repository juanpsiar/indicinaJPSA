import React from 'react';

import { useQuery } from '@apollo/client';
import { SEARCH_REPOS, SEARCH_USERS } from '../services/githubgraphql.services';
import UserGithub from './UserGithub';
import RepoGithub from './RepoGithub';
import Pagination from './Pagination';

function GithubQueryRepos({ searchText, repoQuery, variables, repoCount }) {
  const { loading, error, data } = useQuery(
    repoQuery ? SEARCH_REPOS : SEARCH_USERS,
    {
      variables: { queryString: `${variables}:${searchText}` },
    }
  );
  let repositories;

  const countStyle = (counter) => {
    let numberShowCounter = counter;
    if (counter > 1000) {
      numberShowCounter = `${Math.floor(counter / 1000)}k`;
    }
    return numberShowCounter;
  };

  if (data && data.search) {
    repositories = data.search;
    repoCount(
      repoQuery
        ? countStyle(repositories.repositoryCount)
        : countStyle(repositories.userCount)
    );
  }

  const functionRenderComp = () => {
    if (repoQuery) {
      return (
        <React.Fragment>
          {repositories.nodes.length > 10 ? (
            <Pagination
              data={repositories.nodes}
              RenderComponent={RepoGithub}
              title={`${repositories.repositoryCount} repository results`}
              pageLimit={repositories.nodes.length / 10}
              dataLimit={10}
            />
          ) : (
            <React.Fragment>
              <h1 className='text-lg font-bold'>
                {repositories.repositoryCount} repository results
              </h1>

              {repositories.nodes.map((itemGraphRepo, index) => (
                <RepoGithub data={itemGraphRepo} id={index} />
              ))}
            </React.Fragment>
          )}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {repositories.nodes.length > 10 ? (
            <Pagination
              data={repositories.nodes}
              RenderComponent={UserGithub}
              title={`${repositories.userCount} user`}
              pageLimit={repositories.nodes.length / 10}
              dataLimit={10}
            />
          ) : (
            <React.Fragment>
              <h1 className='text-lg font-bold'>
                {repositories.userCount} user
              </h1>
              {repositories.nodes.map(
                (itemGraphUser, index) =>
                  itemGraphUser.name && (
                    <UserGithub data={itemGraphUser} id={index} />
                  )
              )}
            </React.Fragment>
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
      <div className='flex flex-col'>
        {repositories.nodes.length > 0 ? (
          functionRenderComp()
        ) : (
          <div>There aren't result</div>
        )}
      </div>
    </React.Fragment>
  );
}

export default GithubQueryRepos;
