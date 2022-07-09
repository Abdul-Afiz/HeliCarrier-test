import React from "react";
import { parseDate } from "../../utilities/helper-function";

const index = ({
  title,
  commitment,
  applyUrl,
  locationNames,
  company,
  postedAt,
}) => {
  return (
    <div className="content flex gap-6 items-center">
      <div className="w-[10%] mr-3">
        <img
          src={
            !company.logoUrl
              ? "https://cdn.filestackcontent.com/pk9hUSICSmmoovwL0cTG"
              : company.logoUrl
          }
          alt={company.name}
          className="w-full h-auto object-contain rounded-full"
        />
      </div>
      <div className="data ">
        <span className="block text-[#0967c2] text-xl font-semibold">
          {title}
        </span>

        <div className="flex space-x-1 items-center">
          <span className="block">{company.name}</span>
          {locationNames && (
            <>
              {" "}
              <span>|</span> <span className="">{locationNames}</span>{" "}
            </>
          )}
          <span>|</span>
          <span className="">{commitment.title}</span>
        </div>
        <a
          href={applyUrl}
          target="_blank"
          className="inline-block bg-[#064d95] text-white p-2 my-2 text-sm rounded-sm"
        >
          Click to apply now
        </a>
        <span className="block">{parseDate(postedAt)}</span>
      </div>
    </div>
  );
};

export default index;
