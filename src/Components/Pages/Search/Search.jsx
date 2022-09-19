import {
  Card,
  CardContent,
  CardHeader,
  Button,
  IconButton,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

import { Component } from "react";
import { Link } from "react-router-dom";
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

  componentDidUpdate() {
    this.getJobs();
  }

  onClick = async (e, id) => {
    try {
      let options = {
        method: "DELETE",
      };
      let fetchResponse = await fetch("/api/" + id, options);
      let serverResponse = await fetchResponse.json();
      console.log(serverResponse);
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <div className="containerSearch">
        <div className="search-backBtn">
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            <Button color="secondary" size="large" variant="contained">
              Go Back
            </Button>
          </Link>
        </div>
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
              <CardHeader
                action={
                  <IconButton
                    color="primary"
                    aria-label="remove"
                    component="label"
                    onClick={(e) => this.onClick(e, post._id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                }
                title={post.firstName + " " + post.lastName}
              />

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
