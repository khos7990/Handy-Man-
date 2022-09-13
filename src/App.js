import "./App.css";
import { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Components/Pages/Search/Search";
import Post from "./Components/Pages/Post/Post";
import Home from "./Components/Pages/Home/Home";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="post" element={<Post />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
