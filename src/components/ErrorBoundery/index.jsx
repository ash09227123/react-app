/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-31 18:28:46
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-10-31 19:19:28
 * @FilePath: \react-app\src\components\ErrorBoundery\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";

export default function ErrorBoundery(props) {
  const OopsText = () => (
    <h2 style={{ color: "white" }}>Oops! something went wrong...</h2>
  );
  let isEverythingOk = true;
  return <>{isEverythingOk ? props.children : <OopsText />}</>;
}
