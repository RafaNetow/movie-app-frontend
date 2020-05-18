import React, { Component } from "react";


import  MoviePreference from "../components/MoviePreference"




class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Movie App</h2>
        <MoviePreference/>
      </div>
    );
  }
}

export default Content;
