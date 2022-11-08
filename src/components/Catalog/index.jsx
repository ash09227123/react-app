/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-17 16:03:27
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-08 19:10:16
 * @FilePath: \react-app\src\components\Catalog\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { PureComponent } from "react";
import SortList from "./component/SortList";
import "./index.css";

class Catalog extends PureComponent {
  state = {
    cateTypes: [
      { text: "ALL", checked: false },
      { text: "DOCUMENTORY", checked: false },
      { text: "COMEDY", checked: false },
      { text: "HORROR", checked: false },
      { text: "CRIME", checked: false },
    ],
  };
  switchCate(text) {
    let mutatedCateTypes = this.state.cateTypes.map((item) => {
      item.checked = item.text === text ? true : false;
      return item;
    });
    this.setState({ cateTypes: mutatedCateTypes });
  }
  render() {
    return (
      <>
        <div className="clasify_wrap">
          <div className="catalog">
            {this.state.cateTypes.map((cate, index) => {
              const { text, checked } = cate;
              return (
                <div
                  onClick={() => (!checked ? this.switchCate(text) : false)}
                  className={checked ? "selected" : ""}
                  key={index}
                >
                  {text}
                </div>
              );
            })}
          </div>
          <div className="sort_type">
            <div>SORT BY</div>
            <SortList
              options={[
                { name: "RELEASE DATE", value: 1 },
                { name: "TIME LENGTH", value: 3 },
              ]}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Catalog;
