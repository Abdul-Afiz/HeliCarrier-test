import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ScreenLayout from "./screen-layout";
import JobService from "./service/job-services";
import { getJobs } from "./store/jobs-reducer";

const App = () => {
  const dispatch = useDispatch();

  const allJobs = async () => {
    const jobs = await JobService.getAllJobs();
    if (jobs) {
      dispatch(getJobs(jobs));
    }
  };

  useEffect(() => {
    allJobs();
  }, []);
  return <ScreenLayout />;
};

export default App;
