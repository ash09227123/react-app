/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-12-26 15:25:13
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-27 14:26:57
 * @FilePath: \react-app\src\components\Catalog\component\SortList\_tests_\sortList.test.js
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortList from "../.";

const sortData = [
  { name: "GENRE", value: "genre" },
  { name: "RATING", value: "rating" },
  { name: "RELEASE DATE", value: "release_date" },
];
const mockSortFn = jest.fn((sort) => jest.fn(sort));
describe("sortList", () => {
  it("should render sortlist", async () => {
    let { container } = render(
      <SortList options={sortData} selectSort={mockSortFn} />
    );
    const optionLi = container.querySelectorAll("li");
    expect(optionLi.length).toBe(3);
    fireEvent.click(optionLi[1]);
    const GenreText = screen.getByText("GENRE");
    expect(GenreText).toBeInTheDocument();
  });
});
