import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
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
            <Link style={{ textDecoration: "none" }} to="/search">
              <Button size="large" variant="contained">
                Looking for a work
              </Button>
            </Link>
          </div>
          <div className="buttonPost">
            <Link style={{ textDecoration: "none" }} to="/post">
              {" "}
              <Button color="secondary" size="large" variant="contained">
                Post work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
