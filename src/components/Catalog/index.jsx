/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-17 16:03:27
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-24 15:07:36
 * @FilePath: \react-app\src\components\Catalog\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { PureComponent } from "react";
import SortList from "./component/SortList";
import { GetMovieList } from "@src/api/moive";
import { GET_MOVIES } from "@src/store/actions/movieActions";
import { connect } from "react-redux";
import bus from "@src/utils/bus";
import "./index.css";

class Catalog extends PureComponent {
  state = {
    cateTypes: [
      { text: "ALL", lowerText: "all", checked: false },
      { text: "DOCUMENTORY", lowerText: "documentory", checked: false },
      { text: "COMEDY", lowerText: "comedy", checked: false },
      { text: "HORROR", lowerText: "horror", checked: false },
      { text: "CRIME", lowerText: "crime", checked: false },
    ],
    curCateType: "",
    sortBy: "",
  };

  componentDidMount() {
    bus.on("eventbus", (data) => {
      const { reload } = data;
      if (reload) {
        this.props.getMovies(GetMovieList, {});
      }
    });
    this.props.getMovies(GetMovieList, {});
  }
  switchCate(text) {
    let mutatedCateTypes = this.state.cateTypes.map((item) => {
      item.checked = item.lowerText === text ? true : false;
      return item;
    });
    this.setState({ cateTypes: mutatedCateTypes, curCateType: text }, () => {
      this.props.getMovies(GetMovieList, {
        sortBy: this.state.curCateType,
        filter: this.state.sortBy,
      });
    });
  }
  sortTypehandler(type) {
    let typeVal = (type.value + "").toLowerCase();
    this.setState({ sortBy: typeVal }, () => {
      this.props.getMovies(GetMovieList, {
        sortBy: this.state.curCateType,
        filter: this.state.sortBy,
      });
    });
  }
  render() {
    return (
      <>
        <div className="clasify_wrap">
          <div className="catalog">
            {this.state.cateTypes.map((cate, index) => {
              const { text, lowerText, checked } = cate;
              return (
                <div
                  onClick={() =>
                    !checked ? this.switchCate(lowerText) : false
                  }
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
                { name: "GENRE", value: "genre" },
                { name: "RATING", value: "rating" },
                { name: "RELEASE DATE", value: "release_date" },
              ]}
              selectSort={(sort) => this.sortTypehandler(sort)}
            />
          </div>
        </div>
      </>
    );
  }
}
const retriveMoives = (payload) => ({
  type: GET_MOVIES,
  payload,
});
function mapDispatchtoProps(dispatch) {
  return {
    getMovies: (fetchMovies, filters) => {
      fetchMovies(filters).then((newMovies) =>
        dispatch(retriveMoives(newMovies))
      );
    },
  };
}
export default connect(null, mapDispatchtoProps)(Catalog);
