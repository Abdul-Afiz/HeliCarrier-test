import React from "react";
import { parseDate } from "../../utilities/helper-function";
import "./style.scss";

const index = ({
  title,
  commitment,
  applyUrl,
  locationNames,
  company,
  postedAt,
}) => {
  return (
    <div className="content job-card-wrapper">
      <div className="job-card-img-wrapper">
        <img
          src={
            !company.logoUrl
              ? "https://cdn.filestackcontent.com/pk9hUSICSmmoovwL0cTG"
              : company.logoUrl
          }
          alt={company.name}
        />
      </div>
      <div>
        <span className="job-card-title">{title}</span>

        <div className="job-card-info">
          <span className="block">{company.name}</span>
          {locationNames && (
            <>
              <span>|</span> <span>{locationNames}</span>
            </>
          )}
          <span>|</span>
          <span>{commitment.title}</span>
        </div>
        <a href={applyUrl} target="_blank" className="job-card-cta">
          Click to apply now
        </a>
        <span className="block">{parseDate(postedAt)}</span>
      </div>
    </div>
  );
};

export default index;
