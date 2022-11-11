/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-11 16:16:55
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-11 17:49:35
 * @FilePath: \react-app\src\components\MovieInfo\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";
import styled from "styled-components";

import BrandTitle from "../BrandTitle";
import MovieUrl from "../../../src/assets/home/movie.jpg";
import SearchUrl from "../../../src/assets/home/1668159872250.jpg";

const OutterWrap = styled.div`
  padding: 0 50px;
`;
const TopFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:20px 0;
  img {
    width: 28px;
    height: 29px;
  }
`;

const MovieInfo = function (props) {
  const MoiveImg = styled.div`
    display: block;
    width: 323px;
    height: 480px;
    img {
      width: 100%;
      height: 100%;
    }
  `;
  const MovieInfoLine = styled.div`
    flex: 1;
  `;
  const MovieInfoWrap = styled.div`
    display: flex;
  `;
  return (
    <OutterWrap>
      <TopFlex>
        <BrandTitle />
        <div>
          <img src={SearchUrl} alt="" />
        </div>
      </TopFlex>
      <MovieInfoWrap>
        <MoiveImg>
          <img src={MovieUrl} alt="" />
        </MoiveImg>
        <MovieInfoLine></MovieInfoLine>
      </MovieInfoWrap>
    </OutterWrap>
  );
};

export default MovieInfo;
