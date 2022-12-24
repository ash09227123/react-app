/*
 * @Author: Paul He Paul_He@epam.com
 * @Date: 2022-11-07 15:52:25
 * @LastEditors: Paul He Paul_He@epam.com
 * @LastEditTime: 2022-12-24 15:23:35
 * @FilePath: \react-app\src\components\MyModal\components\MovieOper\index.jsx
 * @Description:
 *
 * Copyright (c) 2022 by Paul He Paul_He@epam.com, All Rights Reserved.
 */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, useField } from "formik";
import Grid from "@mui/material/Grid";
import Select from "react-select";
import { CreateMovie, UpdateMovie } from "@src/api/moive";
import MyModal from "../..";
import bus from "../../../../utils/bus";
import { AlertMapDispatchToProps } from "../../../../utils";
import * as Yup from "yup";
import "./index.less";

const options = [
  "Drama",
  "Romance",
  "Animation",
  "Adventure",
  "Family",
  "Comedy",
  "Fantasy",
  "Science Fiction",
  "Action",
  "Mystery",
  "Thriller",
  "Music",
  "War",
  "Crime",
  "History",
  "Horror",
  "Western",
  "Documentary",
  "TV Movie",
];
const selectOptions = options.map((item) => {
  return { value: item, label: item };
});
function SelectBox(props) {
  const [field, meta, helpers] = useField(props.name);
  const { setValue } = helpers;

  return (
    <Select
      options={selectOptions}
      placeholder="Select Genre"
      isMulti={true}
      {...props}
      onChange={(v) => {
        const fv = v.map((item) => item.value);
        setValue(fv);
      }}
    />
  );
}
const MovieOper = function (props) {
  const { movie = {}, type } = props;

  const {
    title = "",
    release_date = "",
    poster_path = "",
    vote_average = "",
    genres = [],
    runtime,
    overview,
  } = movie;
  const onInfoClose = function () {
    bus.emit("eventbus", {
      infoCardShow: false,
      movie: {},
    });
  };
  const defaulGenres = genres.map((genre) => {
    return { label: genre, value: genre };
  });
  const SignupSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    release_date: Yup.string().required("Required"),
    poster_path: Yup.string().url("Invalid url").required("Required"),
    vote_average: Yup.number()
      .min(0, "Min value is 0")
      .max(10, "Max value is 10")
      .required("Required"),
    runtime: Yup.number()
      .min(0, "Min value is 0")
      .max(1440, "Max value is 1440")
      .required("Required"),
    overview: Yup.string()
      .max(1000, "Must be 1000 characters or less")
      .required("Required"),
  });
  return (
    <>
      <MyModal
        title={type === "add" ? "ADD MOVIE" : "EDIT MOVIE"}
        onClose={onInfoClose}
      >
        <Formik
          initialValues={{
            title,
            release_date,
            poster_path,
            vote_average,
            genres,
            runtime,
            overview,
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            const params = { ...values };
            if (type === "add") {
              const res = await CreateMovie(params);
              if (res) {
                bus.emit("eventbus", {
                  addSucces: true,
                });
              }
            } else {
              // const res = await UpdateMovie(params);
              // if(res){
                bus.emit("eventbus", {
                  updateSucces: true,
                });
              // }
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <p className="itemTitile">TITLE</p>
                  <Field
                    className="grid_content"
                    placeholder="Title..."
                    type="text"
                    name="title"
                  ></Field>
                  {errors.title && touched.title ? (
                    <div className="errorText">{errors.title}</div>
                  ) : null}
                </Grid>
                <Grid item xs={4}>
                  <p className="itemTitile">RELASE DATE</p>
                  <Field
                    className="grid_content"
                    name="release_date"
                    type="date"
                  />
                  {errors.release_date && touched.release_date ? (
                    <div className="errorText">{errors.release_date}</div>
                  ) : null}
                </Grid>
                <Grid item xs={8}>
                  <p className="itemTitile">MOVIE URL</p>
                  <Field
                    className="grid_content"
                    type="text"
                    name="poster_path"
                    placeholder="Movie url..."
                  ></Field>
                  {errors.poster_path && touched.poster_path ? (
                    <div className="errorText">{errors.poster_path}</div>
                  ) : null}
                </Grid>
                <Grid item xs={4}>
                  <p className="itemTitile">RATING</p>
                  <Field
                    className="grid_content"
                    type="number"
                    name="vote_average"
                    placeholder="Rating..."
                  ></Field>
                  {errors.vote_average && touched.vote_average ? (
                    <div className="errorText">{errors.vote_average}</div>
                  ) : null}
                </Grid>
                <Grid item xs={8}>
                  <p className="itemTitile">GENRE</p>
                  <div
                    style={{
                      padding: 5,
                      backgroundColor: "rgba(50, 50, 50, 0.95)",
                      textAlign: "left",
                    }}
                  >
                    <SelectBox
                      defaultValue={defaulGenres}
                      name="genre"
                      style={{ backgroundColor: "#000" }}
                    />
                  </div>
                  {errors.genre && touched.genre ? (
                    <div className="errorText">{errors.genre}</div>
                  ) : null}
                </Grid>
                <Grid item xs={4}>
                  <p className="itemTitile">RUNTIME</p>
                  <Field
                    className="grid_content"
                    type="number"
                    name="runtime"
                    placeholder="Runtime..."
                  ></Field>
                  {errors.runtime && touched.runtime ? (
                    <div className="errorText">{errors.runtime}</div>
                  ) : null}
                </Grid>
                <Grid item xs={12}>
                  <p className="itemTitile">OVERVIEW</p>
                  <Field
                    className="grid_content"
                    type="text"
                    name="overview"
                    as="textarea"
                    placeholder="Overview..."
                  ></Field>
                  {errors.overview && touched.overview ? (
                    <div className="errorText">{errors.overview}</div>
                  ) : null}
                </Grid>
              </Grid>
              <Grid
                container
                xs={24}
                justifyContent="flex-end"
                marginTop={"20px"}
              >
                <button className="reset">RESET</button>
                <button className="submit" type="submit">
                  SUBMIT
                </button>
              </Grid>
            </Form>
          )}
        </Formik>
      </MyModal>
    </>
  );
};

export default MovieOper;
