/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-11 16:16:55
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-16 15:57:41
 * @FilePath: \react-app\src\components\MovieInfo\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { useState, useEffect } from "react";
import styled from "styled-components";

import BrandTitle from "../BrandTitle";
import bus from "../../utils/bus"; 
import SearchUrl from "../../../src/assets/home/search.png";

const OutterWrap = styled.div`
  background-color: #232323;
  padding: 30px 50px;
`;
const TopFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px 0;
  img {
    width: 28px;
    height: 29px;
  }
`;

const MovieInfo = function (props) {
  const { movie } = props;
  const [movieInfo, setMovieInfo] = useState({});
  useEffect(() => {
    console.log(movie);
    movie && setMovieInfo(movie);
  }, [movie]);
  const { title, release_date, poster_path, genres, overview ,vote_average} = movieInfo;
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
    padding: 0 50px;
    text-align: left;
  `;

  const MovieInfoWrap = styled.div`
    display: flex;
  `;
  const MovieName = styled.div`
    display: flex;
    h4 {
      letter-spacing: 2px;
      font-size: 40px;
      color: white;
      margin: 0;
      font-weight: 300;
      margin-right: 20px;
    }
  `;
  const MovieScore = styled.div`
    display: flex;
    width: 60px;
    height: 60px;
    border: 1px solid white;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    span {
      font-size: 20px;
      color: white;
    }
  `;
  const MovieClassify = styled.p`
    color: #9e9e9e;
    font-size: 14px;
    margin: 0;
  `;
  const MovieDate = styled.p`
    color: #f65261;
    font-weight: 200;
    span:first-child {
      margin-right: 50px;
    }
  `;
  const MoiveDesc = styled.p`
    font-size: 20px;
    font-weight: 200;
    color: #9e9e9e;
  `;
  const onSearchClickHandler = function () {
    bus.emit("eventbus", { infoShow: false });
  };
  return (
    <OutterWrap>
      <TopFlex>
        <BrandTitle />
        <div>
          <img src={SearchUrl} alt="" onClick={onSearchClickHandler} />
        </div>
      </TopFlex>
      <MovieInfoWrap>
        <MoiveImg>
          <img src={poster_path} alt="" />
        </MoiveImg>
        <MovieInfoLine>
          <MovieName>
            <h4>{title}</h4>
            <MovieScore>
              <span>{vote_average}</span>
            </MovieScore>
          </MovieName>
          <MovieClassify>
            {genres && genres.length && genres.join(" & ")}
          </MovieClassify>
          <MovieDate>
            <span>{release_date}</span>
            <span>{"2h34min"}</span>
          </MovieDate>
          <MoiveDesc>{overview}</MoiveDesc>
        </MovieInfoLine>
      </MovieInfoWrap>
    </OutterWrap>
  );
};

export default MovieInfo;
