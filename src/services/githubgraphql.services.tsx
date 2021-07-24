import { useQuery, gql } from '@apollo/client';

// const REPOSITORY_ISSUES = gql`
//   query {
//     repository($owner: String!) {
//       issues(last: 20, states: CLOSED) {
//         edges {
//           node {
//             title
//             url
//           }
//         }
//       }
//     }
//   }
// `;

const SEARCH_REPOS = gql`
  query ($queryString: String!) {
    search(first: 10, query: $queryString, type: REPOSITORY) {
      repositoryCount
      nodes {
        ... on Repository {
          name
          nameWithOwner
          owner {
            login
          }
        }
      }
    }
  }
`;

function GithubGraphql(searchText) {
  //const { loadingR, errorR, dataR } = useQuery(REPOSITORY_ISSUES);
  console.log('search text', searchText);
  const { loading, error, data } = useQuery(SEARCH_REPOS, {
    variables: { queryString: `name:${searchText.searchText}` },
  });
  const respositoryIssues = data.search.nodes;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log('data.repository', respositoryIssues);

  return respositoryIssues.map((issueedge, index) => (
    <div key={index}>
      <p>{issueedge.name}</p>
    </div>
  ));
}

export default GithubGraphql;
