import React from "react";
import { useDispatch } from "react-redux";
import { searchTitle } from "../../store/search-reducer";
import SearchIcon from "../../vectors/search-svg";
import "./style.scss";
const index = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <div className="container flex justify-between items-center">
        <div className="logo">
          <h1>JobSearch</h1> <div className="donut"></div>
        </div>
        <div className="input-wrapper">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search by title or company"
            onChange={(e) =>
              dispatch(searchTitle(e.currentTarget.value.trim()))
            }
          />
        </div>
        <div className="text-[#055bae] text-lg font-bold">Welcome</div>
      </div>
    </nav>
  );
};

export default index;
