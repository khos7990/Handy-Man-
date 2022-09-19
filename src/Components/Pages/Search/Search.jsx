import { Card, CardContent, CardHeader, colors } from "@mui/material";
import React, { Component } from "react";
import "./Search.css";

export default class Search extends Component {
  state = {
    posts: [],
    stickyNoteColor: "",
    stickyNoteColors: ["#ff7eb9", "#ff65a3", "#7afcff", "#feff9c", "#fff740"],
    index: 0,
  };

  //
  changeStickyColor = () => {
    let index = Math.floor(Math.random() * 5);
    this.setState({ index });
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
        <div className="cardContainerSearch">
          {this.state.posts.map((post) => (
            <Card
              sx={{
                width: 300,
                height: 300,
                border: "2px solid white",
                backgroundColor: this.state.stickyNoteColors[post.color],
              }}
            >
              <CardHeader title={post.firstName + " " + post.lastName} />

              <CardContent>
                <p> Contact #: {post.contactNum} </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
