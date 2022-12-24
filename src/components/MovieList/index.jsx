/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-10-31 18:25:15
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-24 15:22:06
 * @FilePath: \react-app\src\components\MovieList\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";

import MovieCard from "../MovieCard";
import MovieOper from "../MyModal/components/MovieOper";
import AddModal from "../MyModal/components/AddModal";
import DeleteModal from "../MyModal/components/DeleteModal";
import UpdateModal from "../MyModal/components/UpdateModal";
import bus from "../../utils/bus";
import { DeleteMovie } from "@src/api/moive";
import "./index.less";

class MovieList extends PureComponent {
  state = {
    infoCardShow: false,
    infoType: "info",
    selectedMovie: {},
    addSuccessShow: false,
    delShow: false,
    currentMovieId: "",
    updateSucces: false,
  };
  componentDidMount() {
    bus.on("eventbus", (data) => {
      const {
        infoCardShow,
        type,
        delShow,
        movie,
        movieId,
        addSucces,
        updateSucces,
      } = data;
      if (movie) {
        this.setState({
          selectedMovie: movie,
        });
      }
      if (delShow) {
        this.setState({
          delShow: true,
          currentMovieId: movieId,
        });
      }
      if (addSucces) {
        this.setState({
          addSuccessShow: addSucces,
        });
      }
      if (updateSucces) {
        this.setState({
          updateSucces,
        });
      }

      this.setState({
        infoCardShow,
        infoType: type,
      });
    });
  }
  handleClose = () => {
    this.setState({
      addSuccessShow: false,
      updateSucces: false,
    });
  };
  handleDelConfirm = async () => {
    const { currentMovieId } = this.state;
    const res = await DeleteMovie(currentMovieId);
    this.setState({
      delShow: false,
    });
    bus.emit("eventbus", { reload: true, movie: {} });
  };
  render() {
    const { infoType, selectedMovie, addSuccessShow, updateSucces, delShow } =
      this.state;
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
        {this.state.infoCardShow ? (
          <MovieOper type={infoType} movie={selectedMovie} />
        ) : null}
        {addSuccessShow ? <AddModal onAddClose={this.handleClose} /> : null}
        {updateSucces ? <UpdateModal onUpdateClose={this.handleClose} /> : null}
        {delShow ? (
          <DeleteModal
            onDelClose={() =>
              this.setState({
                delShow: false,
              })
            }
            onDelConfirm={this.handleDelConfirm}
          />
        ) : null}
      </>
    );
  }
}

function mapstatetoProps(state) {
  const {
    movie: { movieList },
  } = state;
  return { movies: movieList };
}

export default connect(mapstatetoProps)(MovieList);
