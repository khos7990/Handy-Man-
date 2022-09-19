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
      industry: [],
      firstName: "",
      lastName: "",
      contactNum: "",
      email: "",
      country: "",
      province: "",
      city: "",
      details: "",
      color: 0,
    },
    successMessage: "",
  };

  handleChange = (e) => {
    let JobPostcopy = this.state.JobPost;
    JobPostcopy[e.target.name] = e.target.value;
    let index = Math.floor(Math.random() * 5);
    JobPostcopy["color"] = index;
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
      if (fetchResponse.status === 200) {
        this.setState({
          successMessage: "Your Job Has Been Posted. Thank you!",
          JobPost: { industry: [] },
        });
      }
      let serverResponse = await fetchResponse.json();
      console.log(serverResponse);
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
                name="firstName"
                onChange={this.handleChange}
                sx={{ margin: 3 }}
                label="First Name"
              />
              <TextField
                name="lastName"
                onChange={this.handleChange}
                sx={{ margin: 3 }}
                label="Last Name"
              />
              <TextField
                name="contactNum"
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
              <div className="industrySelect">
                <InputLabel>Industry</InputLabel>
                <Select
                  sx={{ width: 400 }}
                  multiple
                  onChange={this.handleChange}
                  name={"industry"}
                  value={this.state.JobPost.industry}
                  native={false}
                  renderValue={(value) => {
                    if (value.length === 0) {
                      return "Industry";
                    }

                    return value.join(", ");
                  }}
                >
                  <MenuItem disabled value="">
                    <em>Industry</em>
                  </MenuItem>
                  <MenuItem value={"Plumbing"}>Plumbing</MenuItem>
                  <MenuItem value={"Renovations"}>Renovations</MenuItem>
                  <MenuItem value={"Roofing"}>Roofing</MenuItem>
                  <MenuItem value={"Quick-Fix"}>Quick-Fix</MenuItem>
                  <MenuItem value={"HVAC"}>HVAC</MenuItem>
                </Select>
              </div>
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
              <TextField
                name="details"
                onChange={this.handleChange}
                sx={{ width: "100%" }}
                minRows={3}
                multiline={true}
                label="Details"
              />
              {this.state.successMessage ? (
                <div className="successMessage">
                  {this.state.successMessage}{" "}
                </div>
              ) : null}
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
