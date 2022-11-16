/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-31 18:12:25
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-16 15:57:59
 * @FilePath: \react-app\src\components\MovieCard\index.jsx
 * @overviewription:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import bus from "../../utils/bus";

import "./index.less";

const MovieCard = function (props) {
  const [showOp, setShowOp] = useState(false);

  const { title, release_date, poster_path, genres } = props;
  const onInfoEditHandler = function (e) {
    e.stopPropagation();
    bus.emit("eventbus", {
      infoCardShow: true,
      type: "edit",
    });
    setShowOp(false);
  };
  const onInfoDeleteHandler = function (e) {
    e.stopPropagation();
    bus.emit("eventbus", {
      msgShow: true,
    });
    setShowOp(false);
  };
  const onMovieCardClickHandler = function () {
    bus.emit("eventbus", { infoShow: true, movie: { ...props } });
  };
  return (
    <div className="movie_card_wrap" onClick={onMovieCardClickHandler}>
      <div className="movie_img_wrap">
        <div>
          <img src={poster_path} alt="" />
        </div>
        <div
          className="oper_spot"
          onClick={(e) => {
            e.stopPropagation();
            setShowOp(true);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        {showOp ? (
          <ul className="oper_list">
            <li className="oper_clz" onClick={() => setShowOp(false)}>
              X
            </li>
            <li onClick={onInfoEditHandler}>Edit</li>
            <li onClick={onInfoDeleteHandler}>Delete</li>
          </ul>
        ) : null}
      </div>
      <div className="movie_instruction">
        <div className="movie_info_line">
          <p>{title}</p>
          <span>{release_date}</span>
        </div>
        <div className="movie_info_line movie_info_line_desc">
          <p>{genres.join(" & ")}</p>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string,
};
export default MovieCard;
