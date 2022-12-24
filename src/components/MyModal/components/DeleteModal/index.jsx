/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-12-24 10:15:06
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-24 11:28:04
 * @FilePath: \react-app\src\components\MyModal\components\DeleteModal\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";
import styled from "styled-components";
import MyModal from "../..";

const AlertTitle = styled.h4`
  color: #ffffff;
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 10px;
`;
const AlertContent = styled.p`
  text-align: center;
  color: #ffffff;
  font-weight: 300;
`;
export default function DeleteModal(props) {
  const { onDelClose = () => {}, onDelConfirm = () => {} } = props;
  return (
    <>
      <MyModal width={500} top={"20%"} onClose={onDelClose}>
        <AlertTitle>DELETE MOVIE</AlertTitle>
        <AlertContent>Are you sure you want to delete this movie?</AlertContent>
        <button className="submit" onClick={onDelConfirm}>
          CONFIRM
        </button>
      </MyModal>
    </>
  );
}
