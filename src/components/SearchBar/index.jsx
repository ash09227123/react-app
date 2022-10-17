/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-17 14:48:06
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-10-17 15:44:23
 * @FilePath: \react-app\src\components\SearchBar\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";
import "./index.css";

const SearchBar = () => {
  return (
    <div className="wrap">
      <div className="inner_wrap">
        <h2>FIND YOUR MOVIE</h2>
        <div className="search_bar">
          <input className="search" placeholder="What do you want to watch?" />
          <button className="submit">SEARCH</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
