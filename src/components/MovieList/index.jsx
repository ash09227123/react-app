/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-31 18:25:15
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-10-31 19:27:06
 * @FilePath: \react-app\src\components\MovieList\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";
import MovieCard from "../MovieCard";
import moviePic from '../../assets/home/movie.jpg'

let movieList = [
  {
    title: "Rick and Morthy",
    desc: "anidmati jhfng coplesae dl", 
    id: 24,
    pic:moviePic,
    year: 2004,
  },
];
const MovieList = function (props) {
  return (
    <>
      {movieList.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </>
  );
};

export default MovieList;
