import React from "react";
import "./Post.css";

import { Component } from "react";
import {
  Card,
  CardContent,
  Select,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";

export default class Post extends Component {
  state = {
    industry: "",
  };

  handleChange = (e) => {
    this.setState({ industry: e.target.value });
  };
  render() {
    return (
      <div className="postContainer">
        <Typography variant="h2">Post a Job</Typography>
        <div className="postForm">
          <Card sx={{ border: "2px solid black" }}>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <TextField sx={{ margin: 3 }} label="First Name" />
              <TextField sx={{ margin: 3 }} label="Last Name" />
              <TextField sx={{ margin: 3 }} label="Contact Number" />
              <TextField sx={{ margin: 3 }} label="Email" />

              <InputLabel>Industry</InputLabel>
              <Select onChange={this.handleChange} value={this.state.industry}>
                <MenuItem value={"Plumbing"}>Plumbing</MenuItem>
                <MenuItem value={"Renovations"}>Renovations</MenuItem>
                <MenuItem value={"Roofing"}>Roofing</MenuItem>
                <MenuItem value={"Quick-Fix"}>Quick-Fix</MenuItem>
                <MenuItem value={"HVAC"}>HVAC</MenuItem>
              </Select>
              <Button sx={{ mt: 5 }} variant="outlined">
                Create Post
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
