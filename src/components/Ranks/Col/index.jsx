/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-07 16:30:11
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-07 17:36:24
 * @FilePath: \react-app\src\components\Ranks\Col\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Col = function (props) {
  const { span } = props;
  const oneColWidth = 8.33333333;
  const MyCol = styled.div`
    width: ${span * oneColWidth}%;
  `;

  return <MyCol>{props.children}</MyCol>;
};
Col.propTypes = {
  span: propTypes.number.isRequired,
};
export default Col;
