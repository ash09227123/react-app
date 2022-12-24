/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-12-24 10:15:06
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-24 15:23:02
 * @FilePath: \react-app\src\components\MyModal\components\UpdateModal\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";
import styled from "styled-components";
import MyModal from "../..";

const MarkTitle = styled.h4`
  color: #ffffff;
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 10px;
`;
const MarkContent = styled.p`
  text-align: center;
  color: #ffffff;
  font-weight: 300;
`;
export default function UpdateModal(props) {
  const { onUpdateClose = () => {} } = props;

  return (
    <>
      <MyModal width={500} top={'20%'} onClose={onUpdateClose}>
        <svg
          width="66"
          height="66"
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="33" cy="33" r="32.5" fill="#F65261" stroke="#F65261" />
          <path
            d="M14 35.8347L24.1175 46L49 21"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg> 
        <MarkContent>
          The movie has been updated to <br />
          database successfully
        </MarkContent>
      </MyModal>
    </>
  );
}
