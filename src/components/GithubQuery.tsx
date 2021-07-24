import { useQuery } from '@apollo/client';
import { SEARCH_REPOS, SEARCH_USERS } from '../services/githubgraphql.services';
import UserGithub from './UserGithub';
import './styles/GithubQuery.css';
import RepoGithub from './RepoGithub';

function GithubQueryRepos({ searchText, repoQuery, variables }) {
  // const { loading, error, data } = useQuery(SEARCH_REPOS, {
  //   variables: { queryString: `name:${searchText.searchText}` },
  // });
  console.log('data component', {
    searchText,
    repoQuery,
    variables,
  });
  const { loading, error, data } = useQuery(
    repoQuery ? SEARCH_REPOS : SEARCH_USERS,
    {
      variables: { queryString: `${variables}:${searchText.searchText}` },
    }
  );

  let repositories = [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data && data.search && data.search.nodes) {
    repositories = data.search.nodes;
  }
  console.log('data.repository', data);

  const notFound = ``;

  const functionRenderComp = () => {
    if (repoQuery) {
      return (
        <div>
          <h1>Repos</h1>
          {repositories.map((itemGraph) => (
            <RepoGithub repogit={itemGraph} />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h1>Users</h1>
          {repositories.map((itemGraph) => (
            <UserGithub usergit={itemGraph} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className='container'>
      {repositories.length > 0 ? (
        functionRenderComp()
      ) : (
        /* repoQuery ? (
          (
            <div>
              <h1>Repos</h1> {functionRenderComp}
            </div>
          ) &&
          repositories.map((itemGraph) => <RepoGithub repogit={itemGraph} />)
        ) : (
          <h1>Users</h1> &&
          repositories.map((itemGraph) => <UserGithub usergit={itemGraph} />)
        )
      )  */
        <div>There aren't result</div>
      )}
    </div>
  );
}

export default GithubQueryRepos;
