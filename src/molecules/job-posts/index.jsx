import React from "react";
import { useSelector } from "react-redux";
import { parseDate } from "../../utilities/helper-function";
import JobCard from "../job-card";
import "./style.scss";

const index = ({ date }) => {
  const jobsByDate = useSelector(({ jobPosts, filter }) =>
    jobPosts.filter(
      ({ postedAt, title, company: { name } }) =>
        (parseDate(postedAt) === date &&
          title.toLowerCase().includes(filter.toLowerCase())) ||
        (parseDate(postedAt) === date &&
          name.toLowerCase().includes(filter.toLowerCase()))
    )
  );

  return (
    jobsByDate.length !== 0 && (
      <div className="flex flex-col space-y-5 mt-4">
        {jobsByDate.length !== 0 && <h1 className="job-post-title">{date}</h1>}
        {jobsByDate.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    )
  );
};

export default index;
