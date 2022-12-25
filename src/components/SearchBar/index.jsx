/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-17 14:48:06
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-25 19:18:12
 * @FilePath: \react-app\src\components\SearchBar\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();
  const { searchQuery } = useParams();
  const handleSearch = () => {
    navigate(`/search/${searchVal}`);
  };
  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };
  useEffect(() => {
    if (!searchQuery) setSearchVal("");
    else setSearchVal(searchQuery);
  }, [searchQuery]);
  return (
    <div className="wrap">
      <div className="inner_wrap">
        <h2>FIND YOUR MOVIE</h2>
        <div className="search_bar">
          <input
            value={searchVal}
            className="search"
            onChange={handleInput}
            placeholder="What do you want to watch?"
          />
          <button className="submit" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
