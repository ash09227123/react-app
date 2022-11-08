/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-08 18:51:51
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-08 19:49:42
 * @FilePath: \react-app\src\components\Catalog\component\SortList\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { useState } from "react";
import styled from "styled-components";

const SortList = function (props) {
  const [curType, setCurType] = useState("RELEASE DATE");
  const [listShow, setListShow] = useState(false);

  const SortCompoent = styled.div`
    position: relative;
  `;
  const CurrentType = styled.div`
    color: white;
    margin-right: 10px;
    cursor: pointer;
  `;
  const SortList = styled.ul`
    position: absolute;
    padding: 0;
    top: 50px;
    width: 150px;
    right: -8px;
    margin: 0;
    padding: 10px 0;
    background-color: rgba(0, 0, 0);
    border-radius: 4px;
    z-index: 9999;
  `;
  const Arrow = styled.div`
    position: absolute;
    top: 26px;
    right: -8px;
    height: 0;
    width: 0;
    border-left: 6px solid rgba(0, 0, 0, 0);
    border-top: 7px solid rgba(0, 0, 0, 0);
    border-right: 6px solid rgba(246, 82, 97, 1);
    border-bottom: 7px solid rgba(0, 0, 0, 0);
  `;
  const LiStyle = styled.li`
    list-style: none;
    padding: 10px 0;
    line-height: 1;
    cursor: pointer;
    &:hover {
      background-color: #f65261;
    }
  `;
  const { options = [] } = props;
  return (
    <SortCompoent>
      <CurrentType onClick={() => setListShow(true)}>{curType}</CurrentType>
      <Arrow />
      {listShow ? (
        <SortList>
          {options.map((option) => {
            const { value, name } = option;
            return (
              <LiStyle
                key={value}
                onClick={() => {
                  setCurType(name);
                  setListShow(false);
                }}
              >
                {name}
              </LiStyle>
            );
          })}
        </SortList>
      ) : null}
    </SortCompoent>
  );
};

export default SortList;
