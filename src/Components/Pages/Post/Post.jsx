import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
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
    JobPost: {
      industry: "",
      firstname: "",
      lastname: "",
      contactnumber: "",
      email: "",
      country: "",
      province: "",
      city: "",
      postalcode: "",
    },
  };

  handleChange = (e) => {
    let JobPostcopy = this.state.JobPost;
    JobPostcopy[e.target.name] = e.target.value;

    this.setState({ JobPost: JobPostcopy });
  };

  onClick = async () => {
    try {
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ JobPost: this.state.JobPost }),
      };
      let fetchResponse = await fetch("/api", options);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  render() {
    return (
      <div className="postContainer">
        <div className="post-backBtn">
          <Link style={{ textDecoration: "none" }} to="/">
            {" "}
            <Button color="secondary" size="large" variant="contained">
              Go Back
            </Button>
          </Link>
        </div>

        <div className="postForm">
          <Card
            sx={{
              width: 600,
              backgroundColor: "transparent",
              boxShadow: "0px 0px 1px 1px #000000",
            }}
          >
            <CardHeader title="Personal Information" />
            <CardContent
              sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
            >
              <TextField
                name="firstname"
                onChange={this.handleChange}
                sx={{ margin: 3 }}
                label="First Name"
              />
              <TextField
                name="lastname"
                onChange={this.handleChange}
                sx={{ margin: 3 }}
                label="Last Name"
              />
              <TextField
                name="contactnumber"
                onChange={this.handleChange}
                sx={{ margin: 3 }}
                label="Contact Number"
              />
              <TextField
                name="email"
                onChange={this.handleChange}
                sx={{ margin: 3 }}
                label="Email"
              />

              <InputLabel>Industry</InputLabel>
              <Select
                sx={{ width: 400 }}
                onChange={this.handleChange}
                name={"industry"}
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
              boxShadow: "0px 0px 1px 1px #000000",
            }}
          >
            <CardHeader title="Location" />
            <CardContent>
              <TextField
                name="country"
                onChange={this.handleChange}
                sx={{ margin: 3 }}
                label="Country"
              />
              <TextField
                name="province"
                onChange={this.handleChange}
                sx={{ margin: 3 }}
                label="Province/State"
              />
              <TextField
                name="city"
                onChange={this.handleChange}
                sx={{ margin: 3 }}
                label="City"
              />
              <TextField
                name="postalcode"
                onChange={this.handleChange}
                sx={{ margin: 3 }}
                label="Postal Code"
              />
              <div className="createBtn">
                <Button
                  onClick={this.onClick}
                  sx={{ mt: 5 }}
                  variant="contained"
                >
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
