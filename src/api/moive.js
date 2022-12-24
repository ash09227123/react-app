/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-28 10:44:15
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-24 11:18:49
 * @FilePath: \react-app\src\api\moive.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import request from "../utils/request";

export const GetMovieList = (params = {}) => {
  return request("/api/movies", {
    method: "GET",
    params,
  });
};
export const CreateMovie = (params = {}) => {
  return request("/api/movies", {
    method: "POST",
    data: params,
  });
};
export const UpdateMovie = (params = {}) => {
  return request("/api/movies", {
    method: "PUT",
    data: params,
  });
};
export const DeleteMovie = (id) => {
  return request(`/api/movies/${id}`, {
    method: "DELETE", 
  });
};
