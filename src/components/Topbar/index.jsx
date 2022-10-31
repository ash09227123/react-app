/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-17 15:48:12
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-10-31 12:43:45
 * @FilePath: \react-app\src\components\Topbar\index.jsx
 * @Description: 
 * 
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved. 
 */
import React from "react";
import "./index.less";

const TopBar = function () {
  return (
    <>
      <div className="bar_wrap">
        <div className="title"><span>netflix</span>roulette</div>
        <button className="addM" role="addM">+ ADD MOVIE</button>
      </div>
    </>
  );
};

export default TopBar;
