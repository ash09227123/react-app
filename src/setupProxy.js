/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-28 13:08:28
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-28 14:21:17
 * @FilePath: \react-app\setupProxy.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
const { createProxyMiddleware } = require("http-proxy-middleware"); 
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:4000",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
