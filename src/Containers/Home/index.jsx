/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-31 11:07:51
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-24 11:40:26
 * @FilePath: \react-app\src\Containers\Home\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { useState, useEffect, useCallback } from "react";

import TopBar from "../../components/Topbar";
import SearchBar from "../../components/SearchBar";
import Catalog from "../../components/Catalog";
import ErrorBoundery from "../../components/ErrorBoundery";
import MovieList from "../../components/MovieList";
import WithLoading from "../../components/WithLoading";
import Footer from "../../components/Footer";
import MovieInfo from "../../components/MovieInfo";
import bus from "../../utils/bus";

import "./index.less";

const MovieListWithLoading = WithLoading(MovieList);

export default function Home() {
  const [isDetail, setIsDetail] = useState(false);
  const [curMovie, setCurMoive] = useState({});
  useEffect(() => {
    bus.on("eventbus", (data) => {
      const { infoShow, movie } = data; 
      setIsDetail(infoShow);
      setCurMoive(movie);
    });
  }, []);
  return (
    <>
      <header>
        <div className="header_bg"></div>
        <div className="header_content">
          {!isDetail ? (
            <>
              <TopBar />
              <SearchBar />
            </>
          ) : (
            <MovieInfo movie={curMovie} />
          )}
        </div>
      </header>
      <section>
        <Catalog />
        <ErrorBoundery>
          <MovieListWithLoading isLoaidng={false} />
        </ErrorBoundery>
      </section>
      <Footer />
    </>
  );
}
