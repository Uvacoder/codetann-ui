import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { VStack } from "@chakra-ui/layout";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <VStack maxW="100vw" width="100%" minH="100vh">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </VStack>
  );
}

export default App;
