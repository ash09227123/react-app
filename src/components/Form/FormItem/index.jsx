/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-08 14:19:50
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-08 16:03:17
 * @FilePath: \react-app\src\components\Form\FormItem\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";
import styled from "styled-components";

const FormItem = function (props) {
  const ItemTitile = styled.h4`
    font-weight: 500;
    color: #f65261;
    font-size: 16px;
    text-align: left;
    margin-bottom: 10px;
  `;
  const ItemControl = styled.div`
    width: 100%;
    background: rgba(50, 50, 50, 0.95);
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    text-align: left;
  `;
  return (
    <>
      <ItemTitile>{props.label}</ItemTitile>
      <ItemControl>{props.children}</ItemControl>
    </>
  );
};

export default FormItem;
