import React from 'react';
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MyProvider } from './components/context';
import Home from "./components/home/home";
import EditTask from "./components/edittask/edittask";

const App = () => {
  return (  
    <Router>
      <MyProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-task" element={<EditTask />} />
        </Routes>
      </MyProvider>
    </Router>
  );
};

export default App;