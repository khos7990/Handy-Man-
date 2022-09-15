import React, { Component } from "react";
import "./Search.css";

export default class Search extends Component {
  state = {
    posts: [],
  };

  getJobs = async () => {
    await fetch("/api")
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  };

  componentDidMount() {
    this.getJobs();
  }

  render() {
    return <div className="containerSearch">Search</div>;
  }
}
