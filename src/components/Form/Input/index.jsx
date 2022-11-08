/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-08 15:20:27
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-08 15:30:14
 * @FilePath: \react-app\src\components\Form\Input\index.jsx
 * @Description: 
 * 
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved. 
 */
import React from "react";
import styled from "styled-components";
const Input = function (props) {
  const { style } = props;
  const FormInput = styled.input`
    background-color: unset;
    border:none;
    color: white;
    font-size: 20px;
    width: 200px;
    outline:none
  `;
  return (
    <>
      <FormInput placeholder={props.placeholder} {...style}></FormInput>
    </>
  );
};

export default Input;
