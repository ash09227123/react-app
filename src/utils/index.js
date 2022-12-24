export function scrollToTop() {
  var c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
}
/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-06-15 16:25:39
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-22 21:54:29
 * @FilePath: \react-app\src\utils\index.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
//抽离公共方法
//myAlert显示及隐藏公共方法

export const AlertMapDispatchToProps = (dispatch) => {
  return {
    show(payload) {
      const { defer = 2000, cb = () => {} } = payload || {};
      dispatch({
        type: "show",
        payload,
      });
      setTimeout(() => {
        dispatch({
          type: "hide",
        });
        cb();
      }, defer);
    },
  };
};

export const CurMapDispatchToProps = (dispatch) => {
  return {
    select(payload) {
      dispatch({
        type: "cur",
        payload,
      });
    },
    remove(payload) {
      dispatch({
        type: "removeCurrent",
        payload,
      });
    },
    done(payload) {
      dispatch({
        type: "done",
        payload,
      });
    },
  };
};
