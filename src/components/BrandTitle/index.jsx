/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-10 16:48:23
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-11 16:13:31
 * @FilePath: \react-app\src\components\BrandTitle\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";
import styled from "styled-components";

const BTitle = styled.div`
  color: #f65261;
`;

const BrandTitle = function () {
  return (
    <BTitle>
      <span>netflix</span>roulette
    </BTitle>
  );
};

export default BrandTitle;
