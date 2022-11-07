/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-07 15:52:25
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-07 17:20:53
 * @FilePath: \react-app\src\components\MoiveInfo\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { PureComponent } from "react";
import { Row, Col } from "../Ranks";
import './index.less'

class MovieInfo extends PureComponent {
  state = {
    isEdit: true,
    isShow: false,
  };
  render() {
    const { isEdit, isShow } = this.state;
    return (
      <div className="info_mask">
        <div className="info_card">
          <div className="info_top_oprate_bar">
            <div>X</div>
          </div>
          <p className="info_card_title">
            {isEdit ? "ADD MOVIE" : "EDIT MOVIE"}
          </p>
          <form action="">
            <Row>
              <Col span={8}>
                <input type="text" />
              </Col>
              <Col span={4}>
                <input type="text" />
              </Col>
            </Row>
          </form>
        </div>
      </div>
    );
  }
}
export default MovieInfo;
