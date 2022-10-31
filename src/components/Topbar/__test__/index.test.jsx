/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-31 11:24:09
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-10-31 12:43:55
 * @FilePath: \react-app\src\components\Topbar\__test__\index.test.jsx
 * @Description: 
 * 
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved. 
 */
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import TopBar from "..";

describe("Topbar", () => {
  describe("render", () => {
    it("should render a addM button", () => {
      render(<TopBar />);
      const addMButton = screen.getByRole("addM");
      expect(addMButton).toBeInTheDocument();
    });
  });
});
