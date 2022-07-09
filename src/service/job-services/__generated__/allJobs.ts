/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allJobs
// ====================================================

export interface allJobs_jobs_commitment {
  __typename: "Commitment";
  title: string;
}

export interface allJobs_jobs_company {
  __typename: "Company";
  logoUrl: string | null;
  name: string;
  websiteUrl: string;
}

export interface allJobs_jobs {
  __typename: "Job";
  id: string;
  title: string;
  commitment: allJobs_jobs_commitment;
  applyUrl: string | null;
  locationNames: string | null;
  postedAt: any;
  company: allJobs_jobs_company | null;
}

export interface allJobs {
  jobs: allJobs_jobs[];
}
