import { gql } from '@apollo/client';

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
