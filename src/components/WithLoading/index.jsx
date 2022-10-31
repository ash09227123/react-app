/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-31 18:57:05
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-10-31 19:05:02
 * @FilePath: \react-app\src\components\WithLoading\index.jsx
 * @Description: 
 * 
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved. 
 */
import React from "react";

function WithLoading(Component) {
  const LoadingIndication = () => <h2>Just a moment...Almost there</h2>;

  return function WithLodingComponent({ isLoaidng, ...props }) {
    return isLoaidng ? <LoadingIndication /> : <Component {...props} />;
  };
}

export default WithLoading;
