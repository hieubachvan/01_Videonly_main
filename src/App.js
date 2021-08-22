import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/">
        <HomePage />
      </Route>
    </Router>
  );
}

export default App;
