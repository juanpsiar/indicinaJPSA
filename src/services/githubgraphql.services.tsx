import { useQuery, gql } from '@apollo/client';

export const SEARCH_REPOS = gql`
  query ($queryString: String!) {
    search(first: 100, query: $queryString, type: REPOSITORY) {
      repositoryCount
      nodes {
        ... on Repository {
          name
          description
          licenseInfo {
            name
          }
          primaryLanguage {
            name
          }
          latestRelease {
            updatedAt
          }
        }
      }
    }
  }
`;

export const SEARCH_USERS = gql`
  query ($queryString: String!) {
    search(first: 100, query: $queryString, type: USER) {
      userCount
      nodes {
        ... on User {
          name
          email
          bio
          login
        }
      }
    }
  }
`;

// function GithubGraphql(searchText) {
//   //const { loadingR, errorR, dataR } = useQuery(REPOSITORY_ISSUES);
//   console.log('search text', searchText);
//   // const { loading, error, data } = useQuery(SEARCH_REPOS, {
//   //   variables: { queryString: `name:${searchText.searchText}` },
//   // });
//   const { loading, error, data } = useQuery(SEARCH_USERS, {
//     variables: { queryString: `login:${searchText.searchText}` },
//   });

//   let repositories = [];

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
//   if (data && data.search && data.search.nodes) {
//     repositories = data.search.nodes;
//   }
//   console.log('data.repository', data);

//   return (
//     <div>
//       {repositories.length > 0 ? (
//         repositories.map((issueedge, index) => (
//           <div key={index}>
//             <p>{issueedge.name}</p>
//           </div>
//         ))
//       ) : (
//         <div>There aren't result</div>
//       )}
//     </div>
//   );
// }

// export default GithubGraphql;
