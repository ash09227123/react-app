/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-07 16:09:18
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-07 17:36:54
 * @FilePath: \react-app\src\components\Ranks\Row\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";
import styled from "styled-components";

const MyRow = styled.div`
  display: flex;
  width: 100%;
`;

const Row = function (props) {
  return <MyRow>{props.children}</MyRow>;
};
export default Row;
