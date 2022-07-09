import { apolloClient } from "../../graphql";
import { GET_JOB } from "./query";

class JobService {
  async getAllJobs() {
    try {
      const res = await apolloClient.query({ query: GET_JOB });
      if (!res || !res.data) {
        throw new Error("cannot fetch jobs");
      }
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new JobService();
