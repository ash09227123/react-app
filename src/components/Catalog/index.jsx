/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-17 16:03:27
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-25 19:25:31
 * @FilePath: \react-app\src\components\Catalog\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { useState, useEffect } from "react";
import SortList from "./component/SortList";
import { GetMovieList } from "@src/api/moive";
import { GET_MOVIES } from "@src/store/actions/movieActions";
import { connect } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import bus from "@src/utils/bus";
import "./index.css";

function Catalog(props) {
  const { getMovies } = props;
  const { searchQuery } = useParams();
  const [searchParams] = useSearchParams();
  const genreParam = searchParams.get("genre");
  const [cateTypes, setCateTypes] = useState([
    { text: "ALL", lowerText: "all", checked: false },
    { text: "DOCUMENTORY", lowerText: "documentory", checked: false },
    { text: "COMEDY", lowerText: "comedy", checked: false },
    { text: "HORROR", lowerText: "horror", checked: false },
    { text: "CRIME", lowerText: "crime", checked: false },
  ]);
  const [curCateType, setCurCateType] = useState("");
  const [sortBy, setSortBy] = useState("");

 
  useEffect(() => {
    bus.on("eventbus", (data) => {
      const { reload } = data;
      if (reload) {
        getMovies(GetMovieList, {});
      }
    });
    getMovies(GetMovieList, { search: searchQuery, filter: genreParam });
  }, [getMovies,searchQuery, genreParam]);
  const switchCate = (text) => {
    let mutatedCateTypes = cateTypes.map((item) => {
      item.checked = item.lowerText === text ? true : false;
      return item;
    });
    setCateTypes(mutatedCateTypes);
    setCurCateType(text);
    getMovies(GetMovieList, {
      sortBy: curCateType,
      filter: sortBy,
    });
  };
  const sortTypehandler = (type) => {
    let typeVal = (type.value + "").toLowerCase();
    setSortBy(typeVal);
    getMovies(GetMovieList, {
      sortBy: curCateType,
      filter: sortBy,
    });
  };

  return (
    <>
      <div className="clasify_wrap">
        <div className="catalog">
          {cateTypes.map((cate, index) => {
            const { text, lowerText, checked } = cate;
            return (
              <div
                onClick={() => (!checked ? switchCate(lowerText) : false)}
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
            selectSort={(sort) => sortTypehandler(sort)}
          />
        </div>
      </div>
    </>
  );
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
