/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-31 11:07:51
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-01 15:30:59
 * @FilePath: \react-app\src\Containers\Home\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";

import TopBar from "../../components/Topbar";
import SearchBar from "../../components/SearchBar";
import Catalog from "../../components/Catalog";
import ErrorBoundery from "../../components/ErrorBoundery";
import MovieList from "../../components/MovieList";
import WithLoading from "../../components/WithLoading";
import Footer from "../../components/Footer";

import "./index.less";

const MovieListWithLoading = WithLoading(MovieList);

export default function Home() {
  return (
    <>
      <header>
        <div className="header_bg"></div>
        <div className="header_content">
          <TopBar />
          <SearchBar />
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
