/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-07 15:52:25
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-08 18:07:46
 * @FilePath: \react-app\src\components\MoiveInfo\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { PureComponent } from "react";
import { Row, Col } from "../Ranks";
import { FormItem, Input } from "../Form";
import MyModal from "../MyModal";
import bus from "../../utils/bus";

class MovieInfo extends PureComponent {
  state = {
    isEdit: true,
    isShow: false,
  };
  onInfoClose = function () {
    bus.emit("eventbus", {
      infoCardShow: false,
    });
  };
  render() {
    const { type } = this.props;
    const { isEdit, isShow } = this.state;
    return (
      <MyModal
        title={type === "add" ? "ADD MOVIE" : "EDIT MOVIE"}
        onClose={this.onInfoClose}
      >
        <form action="">
          <Row gutter="24">
            <Col span={8}>
              <FormItem label="TITILE">
                <Input type="text" placeholder="Add Title" />
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem label="RELEASE DATE">
                <Input type="text" />
              </FormItem>
            </Col>
          </Row>
          <Row gutter="24">
            <Col span={8}>
              <FormItem label="MOVIE URL">
                <Input type="text" placeholder="Add Title" />
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem label="RATING">
                <Input type="text" />
              </FormItem>
            </Col>
          </Row>
          <Row gutter="24">
            <Col span={8}>
              <FormItem label="GEMRE">
                <Input type="text" placeholder="Add Title" />
              </FormItem>
            </Col>
            <Col span={4}>
              <FormItem label="RUNTIME">
                <Input type="text" />
              </FormItem>
            </Col>
          </Row>
          <Row gutter="24" mb="48">
            <Col span={12}>
              <FormItem label="OVERVIEW">
                <Input type="text" />
              </FormItem>
            </Col>
          </Row>
        </form>
      </MyModal>
    );
  }
}
export default MovieInfo;
