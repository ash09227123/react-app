/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-17 16:03:27
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-10-17 16:33:10
 * @FilePath: \react-app\src\components\Catalog\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { PureComponent } from "react";
import "./index.css";

class Catalog extends PureComponent {
  state = {
    current: 0,
  };
  render() {
    return (
      <>
        <div className="clasify_wrap">
          <div className="catalog">
            <div>All</div>
            <div>DOCUMENTORY</div>
            <div>COMEDY</div>
            <div>HORROR</div>
            <div>CRIME</div>
          </div>
          <div className="sort_type">
            <div>SORT BY</div>
            <select name="sortType">
              <option value="0">RELEASE DATE</option>
              <option value="1">SHOW DATE</option>
            </select>
          </div>
        </div>
      </>
    );
  }
}

export default Catalog;
