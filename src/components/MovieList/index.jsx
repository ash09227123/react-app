/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-31 18:25:15
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-29 14:16:05
 * @FilePath: \react-app\src\components\MovieList\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";

import MovieCard from "../MovieCard";
import moviePic from "../../assets/home/movie.jpg";
import MovieOper from "../MovieOper";
import MyModal from "../MyModal";
import bus from "../../utils/bus";
import "./index.less";

class MovieList extends PureComponent {
  state = {
    infoCardShow: false,
    infoType: "info",
    msgShow: false,
  };
  componentDidMount() {
    bus.on("eventbus", (data) => {
      const { infoCardShow, type, msgShow } = data;
      this.setState({
        infoCardShow,
        infoType: type,
        msgShow,
      });
    });
  }
  render() {
    const { infoType } = this.state;
    const { movies } = this.props;
    let mlen = movies.length;
    return (
      <>
        <p className="seq">
          <span className="seq_num">{mlen} </span>movie{mlen > 1 ? "s" : ""}
          found
        </p>
        <div className="move_row">
          {movies.length
            ? movies.map((movie) => <MovieCard {...movie} key={movie.id} />)
            : ""}
        </div>
        {this.state.infoCardShow ? <MovieOper type={infoType} /> : null}
        {this.state.msgShow ? (
          <MyModal
            width="686"
            title="DELETE MOVIE"
            onClose={() => this.setState({ msgShow: false })}
            footer={<button className="submit">CONFIRM</button>}
          >
            <p style={{ color: "white", textAlign: "left" }}>
              Are you sure you want to delete this movie?
            </p>
          </MyModal>
        ) : null}
      </>
    );
  }
}

function mapstatetoProps(state) {
  const { movieList } = state;
  return { movies: movieList };
}

export default connect(mapstatetoProps)(MovieList);
