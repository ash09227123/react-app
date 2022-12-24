/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-17 15:48:12
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-24 15:10:35
 * @FilePath: \react-app\src\components\Topbar\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { useEffect } from "react";

import BrandTitle from "../BrandTitle";
import bus from "../../utils/bus";
import "./index.less";

const TopBar = function () {
  const movieInfovisibleHander = function (e) {
    e.stopPropagation();
    bus.emit("eventbus", {
      infoCardShow: true,
      type: "add",
      movie: {},
    });
  };
  return (
    <>
      <div className="bar_wrap">
        <BrandTitle />
        <button className="addM" role="addM" onClick={movieInfovisibleHander}>
          + ADD MOVIE
        </button>
      </div>
    </>
  );
};

export default TopBar;
