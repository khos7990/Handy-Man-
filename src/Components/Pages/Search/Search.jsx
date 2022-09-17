import { Card, CardContent, CardHeader, colors } from "@mui/material";
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
    return (
      <div className="containerSearch">
        Search
        <Card
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "#ff7eb9",
            border: "2px solid white",
          }}
        >
          <CardHeader title="Test" />

          <CardContent></CardContent>
        </Card>
      </div>
    );
  }
}
