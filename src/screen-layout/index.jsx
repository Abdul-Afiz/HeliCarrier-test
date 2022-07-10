import JobPosts from "../molecules/job-posts";
import Navbar from "../molecules/nav-bar";
import FilterCard from "../atom/filter-card";
import { parseDate } from "../utilities/helper-function";
import { useDispatch, useSelector } from "react-redux";
import { sortDate } from "../store/sort-reducer";

import "./style.scss";

const index = () => {
  const dispatch = useDispatch();
  const sort = useSelector(({ sort: { filterSort } }) => filterSort);

  //getting unique date in an array
  const date = useSelector(({ jobPosts }) =>
    jobPosts
      .map((v) => parseDate(v.postedAt))
      .filter((v, i, arr) => arr.indexOf(v) === i)
  );

  //getting unique companies in an array
  const company = useSelector(({ jobPosts }) =>
    jobPosts
      .map(({ company: { name } }) =>
        name.split(" ").length > 1 ? name.split(" ")[0] : name
      )
      .filter((v, i, arr) => arr.indexOf(v) === i)
  );

  //sorting the date
  sort === "oldest"
    ? date.sort((a, b) => new Date(a) - new Date(b))
    : date.sort((a, b) => new Date(b) - new Date(a));

  if (date.length === 0) {
    return (
      <div className="loading">
        <div className="donut w-32 h-32"></div>
      </div>
    );
  }

  const headerFilter = [
    { title: "Newest", onClick: () => dispatch(sortDate("newest")) },
    { title: "Oldest", onClick: () => dispatch(sortDate("oldest")) },
    { title: "Company", select: company },
  ];

  return (
    <main>
      <Navbar />
      <header>
        <div className="container flex space-x-3">
          {headerFilter.map((data) => (
            <FilterCard key={data.title} {...data} />
          ))}
        </div>
      </header>
      <section className="container children scrollbar-hide">
        {date.map((date) => (
          <JobPosts key={date} date={date} />
        ))}
      </section>
    </main>
  );
};

export default index;
