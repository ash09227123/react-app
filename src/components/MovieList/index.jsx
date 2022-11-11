/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-31 18:25:15
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-11-11 16:16:18
 * @FilePath: \react-app\src\components\MovieList\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { PureComponent } from "react";

import MovieCard from "../MovieCard";
import moviePic from "../../assets/home/movie.jpg";
import MovieOper from "../MovieOper";
import MyModal from "../MyModal";
import bus from "../../utils/bus";
import "./index.less";

let movieList = [
  {
    title: "Rick and Morthy",
    desc: "anidmati jhfng coplesae dl",
    id: 20,
    pic: moviePic,
    year: 2004,
  },
  {
    title: "Rick and Morthy",
    desc: "anidmati jhfng coplesae dl",
    id: 24,
    pic: moviePic,
    year: 2004,
  },
  {
    title: "Rick and Morthy",
    desc: "anidmati jhfng coplesae dl",
    id: 25,
    pic: moviePic,
    year: 2004,
  },
  {
    title: "Rick and Morthy",
    desc: "anidmati jhfng coplesae dl",
    id: 26,
    pic: moviePic,
    year: 2004,
  },
];

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
    let mlen = movieList.length;
    const { infoType } = this.state;
    return (
      <>
        <p className="seq">
          <span className="seq_num">{mlen} </span>movie{mlen > 1 ? "s" : ""}{" "}
          found
        </p>
        <div className="move_row">
          {movieList.map((movie) => (
            <MovieCard {...movie} key={movie.id} />
          ))}
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

export default MovieList;
