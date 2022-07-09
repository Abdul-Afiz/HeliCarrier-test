import { gql } from "@apollo/client";

export const GET_JOB = gql`
  query allJobs {
    jobs {
      id
      title
      commitment {
        title
      }
      applyUrl
      locationNames
      postedAt
      company {
        logoUrl
        name
        websiteUrl
      }
    }
  }
`;
