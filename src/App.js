import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Route path="/">
        <HomePage />
      </Route>
    </Router>
  );
}

export default App;
