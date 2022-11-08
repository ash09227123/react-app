/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-31 18:12:25
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-08 18:23:22
 * @FilePath: \react-app\src\components\MovieCard\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
import bus from "../../utils/bus";

import "./index.less";

const MovieCard = function (props) {
  const [showOp, setShowOp] = useState(false);

  const { title, year, pic, desc } = props;
  const onInfoEditHandler = function () {
    bus.emit("eventbus", {
      infoCardShow: true,
      type: "edit",
    });
    setShowOp(false);
  };
  const onInfoDeleteHandler = function () {
    bus.emit("eventbus", {
      msgShow: true,
    });
    setShowOp(false);
  };
  return (
    <div className="movie_card_wrap">
      <div className="movie_img_wrap">
        <div>
          <img src={pic} alt="" />
        </div>
        <div className="oper_spot" onClick={() => setShowOp(true)}>
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
  desc: PropTypes.string,
};
export default MovieCard;
