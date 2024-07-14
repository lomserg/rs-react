import React from "react";
import { Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404/Page404";
import "./App.css";
import Test from "./components/test";
import Main from "./pages/Page404/Main/Main";
class App extends React.Component {
  render() {
    return (
      <>
        <Test name="serg" />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/404" element={<Page404 />} />
        </Routes>
      </>
    );
  }
}

export default App;
