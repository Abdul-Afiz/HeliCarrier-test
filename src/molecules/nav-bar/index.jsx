import React from "react";
import { useDispatch } from "react-redux";
import { searchTitle } from "../../store/search-reducer";
import SearchIcon from "../../vectors/search-svg";
import "./style.scss";
const index = () => {
  const dispatch = useDispatch();
  return (
    <nav className="bg-white py-4 border-b-[#ebebeb] border-b-[0.5px]">
      <div className="container flex justify-between items-center">
        <div className="logo flex items-center">
          <h1 className="text-[#055bae] text-lg font-bold">JobSearch</h1>{" "}
          <div className="donut"></div>
        </div>
        <div className="flex flex-[0.5] justify-center py-3 px-3 border-[#d4d3d3] border-[1px] rounded-full">
          <SearchIcon />
          <input
            type="text"
            className="ml-2 w-full text-lg outline-none"
            onChange={(e) =>
              dispatch(searchTitle(e.currentTarget.value.trim()))
            }
          />
        </div>
        <div className="logo text-[#055bae] text-lg font-bold">Welcome</div>
      </div>
    </nav>
  );
};

export default index;
