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
  CardHeader,
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
          <Card
            sx={{
              border: "2px solid black",
              width: 600,
              backgroundColor: "transparent",
            }}
          >
            <CardHeader title="Personal Information" />
            <CardContent
              sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
            >
              <TextField sx={{ margin: 3 }} label="First Name" />
              <TextField sx={{ margin: 3 }} label="Last Name" />
              <TextField sx={{ margin: 3 }} label="Contact Number" />
              <TextField sx={{ margin: 3 }} label="Email" />

              <InputLabel>Industry</InputLabel>
              <Select
                sx={{ width: 400 }}
                onChange={this.handleChange}
                value={this.state.industry}
              >
                <MenuItem value={"Plumbing"}>Plumbing</MenuItem>
                <MenuItem value={"Renovations"}>Renovations</MenuItem>
                <MenuItem value={"Roofing"}>Roofing</MenuItem>
                <MenuItem value={"Quick-Fix"}>Quick-Fix</MenuItem>
                <MenuItem value={"HVAC"}>HVAC</MenuItem>
              </Select>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: 600,
              backgroundColor: "transparent",
            }}
          >
            <CardHeader title="Location" />
            <CardContent>
              <TextField sx={{ margin: 3 }} label="Country" />
              <TextField sx={{ margin: 3 }} label="Province/State" />
              <TextField sx={{ margin: 3 }} label="City" />
              <TextField sx={{ margin: 3 }} label="Postal Code" />
              <div className="createBtn">
                <Button sx={{ mt: 5 }} variant="contained">
                  Create Post
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
