/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-31 18:25:15
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-02 14:52:11
 * @FilePath: \react-app\src\components\MovieList\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";
import MovieCard from "../MovieCard";
import moviePic from "../../assets/home/movie.jpg";
import "./index.less";

let movieList = [
  {
    title: "Rick and Morthy",
    desc: "anidmati jhfng coplesae dl",
    id: 24,
    pic: moviePic,
    year: 2004,
  },
  {
    title: "Rick and Morthy",
    desc: "anidmati jhfng coplesae dl",
    id: 24,
    pic: moviePic,
    year: 2004,
  },
  {
    title: "Rick and Morthy",
    desc: "anidmati jhfng coplesae dl",
    id: 25,
    pic: moviePic,
    year: 2004,
  },
  {
    title: "Rick and Morthy",
    desc: "anidmati jhfng coplesae dl",
    id: 26,
    pic: moviePic,
    year: 2004,
  },
];
const MovieList = function (props) {
  let mlen = movieList.length;
  return (
    <>
      <p className="seq">
        <span className="seq_num">{mlen} </span>movie{mlen > 1 ? "s" : ""} found
      </p>
      <div className="move_row">
        {movieList.map((movie) => (
          <MovieCard {...movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
