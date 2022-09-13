import { Button } from "@mui/material";

import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="dataContainer">
          <div className="titleContainer">
            <div className="title">The Handy Man</div>

            <img
              className="hammerIcon"
              src={require("../../../Pics/hammer.png")}
            />
          </div>
          <div className="buttonContainer">
            <div className="buttonLook">
              <Button size="large" variant="contained">
                Looking for a work
              </Button>
            </div>
            <div className="buttonPost">
              <Button color="secondary" size="large" variant="contained">
                Post work
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
