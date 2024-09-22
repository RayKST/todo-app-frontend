import React from 'react';
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/home/home";
import EditTask from "./components/edittask/edittask";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-task" element={<EditTask />} />
      </Routes>
    </Router>
  );
};

export default App;