/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-08 18:51:51
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-27 13:39:20
 * @FilePath: \react-app\src\components\Catalog\component\SortList\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./index.less";

const SortList = function (props) {
  const { selectSort, options = [] } = props;
  const [curType, setCurType] = useState();
  useEffect(() => {
    curType && selectSort(curType);
  }, [curType]);
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
    transition: all ease-in 0.3s;
  `;
  const SortList = styled.ul`
    position: absolute;
    visibility: hidden;
    padding: 0;
    top: 48px;
    width: 150px;
    right: -8px;
    margin: 0;
    padding: 10px 0;
    background-color: rgba(0, 0, 0);
    border-radius: 4px;
    opacity: 0;
    transition: all ease-in-out 0.3s;
    z-index: 99;
  `;
  const SortCompoent = styled.div`
    position: relative;
    &:hover {
      ${Arrow} {
        transform: rotate(-90deg) translate(-3px, 3px);
      }
      ${SortList} {
        visibility: visible;
        opacity: 1;
        transform: translate(0px, 5px);
      }
    }
  `;
  const CurrentType = styled.div`
    width: 120px;
    color: white;
    margin-right: 10px;
    cursor: pointer;
    text-align: right;
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

  return (
    <SortCompoent>
      <CurrentType>{curType && curType.name}</CurrentType>
      <Arrow />
      <SortList>
        {options.map((option) => {
          const { name } = option;
          return (
            <LiStyle
              key={name}
              className={curType && curType.name === name ? "sort_current" : ""}
              onClick={() => {
                setCurType(option);
              }}
            >
              {name}
            </LiStyle>
          );
        })}
      </SortList>
    </SortCompoent>
  );
};

export default SortList;
