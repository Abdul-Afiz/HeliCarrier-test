import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTitle } from "../../store/search-reducer";
import DropDownIcon from "../../vectors/drop-down-icon";

const index = ({ title, select, onClick }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const selectedValue = (value) => {
    setShow(!show);
    dispatch(searchTitle(value));
  };

  return select && select.length !== 0 ? (
    <div className="bg-[#e3f0fe] text-[#666666] p-2 text-lg font-medium rounded-sm relative cursor-pointer">
      <div className="flex items-center" onClick={() => setShow(!show)}>
        <span>{title}</span>
        <DropDownIcon />
      </div>
      <div
        className={`absolute bg-[#e3f0fe]  h-[15rem] overflow-auto flex flex-col items-center right-0 left-0 top-[2.8
        rem] space-y-2 py-2 ${!show && "hidden"}`}
      >
        <span
          className="option text-base text-[black] cursor-pointer"
          onClick={() => selectedValue("")}
        >
          All
        </span>
        {select.map((value) => (
          <span
            className="option text-sm text-[black] cursor-pointer "
            key={value}
            onClick={() => selectedValue(value)}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  ) : (
    <div
      className="bg-[#e3f0fe] text-[#666666] p-2 text-lg font-medium rounded-sm cursor-pointer"
      onClick={onClick}
    >
      {title}
    </div>
  );
};
export default index;
