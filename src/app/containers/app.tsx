import React, { Component } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/error";
import Home from "../pages/home";
import Login from "../pages/login";
import Employees from "../pages/employees";
import ProtectedRoute from "../components/ProtectedRoute";

import Upload from "../pages/upload";

type Props = {};

type State = {};

export default class App extends Component<Props, State> {
  state = {};
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<ProtectedRoute />}>
            <Route path="/employees" element={<Employees />} />
          </Route>
          <Route path="/upload" element={<ProtectedRoute />}>
            <Route path="/upload" element={<Upload />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
    );
  }
}
