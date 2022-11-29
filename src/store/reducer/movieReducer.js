/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-28 14:35:39
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-28 16:32:57
 * @FilePath: \react-app\src\store\reducer\movieReducer.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
const moveState = {
  movieList: [],
};

export default (state = moveState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "getMovies":
      newState.movieList = action.payload;
      break;
    default:
      break;
  }
  console.log(newState);
  return newState;
};
