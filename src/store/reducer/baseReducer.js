/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-06-15 14:24:07
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-22 21:41:17
 * @FilePath: \react-app\src\store\reducer\baseReducer.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
// 定义默认状态
const defaultState = {
  show: false,
  alertState: {
    type: "error",
    content: "演示数据",
  },
};

// 导出一个函数
export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "show":
      newState.show = true;
      newState.alertState = { ...action.payload };
      break;
    case "hide":
      newState.show = false;
      break;
    default:
      break;
  }

  return newState;
};
