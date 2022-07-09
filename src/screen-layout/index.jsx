import React, { useEffect, useState } from "react";
import JobPosts from "../molecules/job-posts";
import Navbar from "../molecules/nav-bar";
import FilterCard from "../atom/filter-card";
import { parseDate } from "../utilities/helper-function";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../store/jobs-reducer";
import JobService from "../service/job-services";
import { sortDate } from "../store/sort-reducer";

const index = () => {
  const dispatch = useDispatch();
  const sort = useSelector(({ sort: { filterSort } }) => filterSort);

  const date = useSelector(({ jobPosts }) =>
    jobPosts
      .map((v) => parseDate(v.postedAt))
      .filter((v, i, arr) => arr.indexOf(v) === i)
  );

  const company = useSelector(({ jobPosts }) =>
    jobPosts
      .map(({ company: { name } }) =>
        name.split(" ").length > 1 ? name.split(" ")[0] : name
      )
      .filter((v, i, arr) => arr.indexOf(v) === i)
  );

  const allJobs = async () => {
    const jobs = await JobService.getAllJobs();
    if (jobs) {
      dispatch(getJobs(jobs));
    }
  };
  useEffect(() => {
    allJobs();
  }, []);
  sort === "oldest"
    ? date.sort((a, b) => new Date(a) - new Date(b))
    : date.sort((a, b) => new Date(b) - new Date(a));

  if (date.length === 0) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="donut w-32 h-32"></div>
      </div>
    );
  }

  return (
    <main className="flex flex-col h-screen ">
      <Navbar />
      <header className="bg-white py-3 border-b-[#d4d3d3] border-b-[0.5px]">
        <div className="container flex space-x-3">
          <FilterCard
            title="Newest"
            onClick={() => dispatch(sortDate("newest"))}
          />
          <FilterCard
            title="Oldest"
            onClick={() => dispatch(sortDate("oldest"))}
          />
          <FilterCard select={company} title="Company" />
        </div>
      </header>
      <section className="container overflow-auto flex-1 pb-5 scrollbar-hide">
        {date.map((date) => (
          <JobPosts key={date} date={date} />
        ))}
      </section>
    </main>
  );
};

export default index;
