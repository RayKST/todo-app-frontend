import React from 'react';
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MyProvider } from './components/context';

import CreateTask from './components/createtask/createtask'
import EditTask from "./components/edittask/edittask";
import Header from "./components/header/header"
import Home from "./components/home/home";
import Login from "./components/login/login";

const App = () => {
  return (  
    <Router>
      <Header />
      <MyProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/edit-task" element={<EditTask />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MyProvider>
    </Router>
  );
};

export default App;