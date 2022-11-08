/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-07 16:09:18
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-08 16:26:03
 * @FilePath: \react-app\src\components\Ranks\Row\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Row = function (props) {
  const { gutter, children, mb } = props;
  const MyRow = styled.div`
    display: flex;
    width: calc(100% + ${gutter}px);
    margin-left: -${gutter / 2}px;
    margin-bottom: ${mb}px;
  `;
  const formatChildren = gutter
    ? children.length
      ? children.map((child, index) => {
          let { type } = child || {};
          if (type.name === "Col") {
            return React.cloneElement(child, { gutter: gutter, key: index });
          }
          return child;
        })
      : React.cloneElement(children, { gutter: gutter })
    : children;
  return <MyRow>{formatChildren}</MyRow>;
};
Row.prototype = {
  gutter: PropTypes.string || PropTypes.number,
  mb: PropTypes.string || PropTypes.number,
};
export default Row;
