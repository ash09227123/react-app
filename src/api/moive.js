/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-28 10:44:15
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-29 14:41:53
 * @FilePath: \react-app\src\api\moive.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import request from "../utils/request";

export const GetMovieList = (params = {}) => {
  console.log(params);
  return request("/api/movies", {
    method: "get",
    params,
  });
};
