/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-31 18:12:25
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-07 17:17:55
 * @FilePath: \react-app\src\components\MovieCard\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";
import PropTypes from "prop-types";
 
import "./index.less";

const MovieCard = function (props) {
  const { title, year, pic, desc } = props;
  return (
    <div className="movie_card_wrap">
      <div className="movie_img_wrap">
        <div>
          <img src={pic} alt="" />
        </div>
        <div className="oper_spot">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="movie_instruction">
        <div className="movie_info_line">
          <p>{title}</p>
          <span>{year}</span>
        </div>
        <div className="movie_info_line movie_info_line_desc">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  pic: PropTypes.string.isRequired,
  desc:PropTypes.string
};
export default MovieCard;
